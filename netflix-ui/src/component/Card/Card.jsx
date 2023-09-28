import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "./Card.styled";
// import video from "../../assets/beachVid.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useDispatch } from "react-redux";
import { removeFromLikedMovies } from "../../redux/thunk";
import toast from "react-hot-toast";

const Card = ({ movieData, isLiked = false, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });

  const addToList = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/add", {
        email,
        data: movieData,
      });
      toast.success(`${movieData.name} successfully added!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="card"
        // onClick={() => navigate("/player")}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="card"
              // onClick={handleClick(movieData)}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name">{movieData.name}</h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={handleClick(movieData)}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsTrash
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeFromLikedMovies(
                          { movieId: movieData.id, email },
                          toast.success(
                            `${movieData.name} successfully remove from List!`
                          )
                        )
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card;

// {
//   isHovered && (
//     <div className="hover">
//       <div className="image-video-container">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
//           alt="card"
//           onClick={() => navigate("/player")}
//         />
//         <video
//           src={video}
//           autoPlay={true}
//           loop
//           muted
//           onClick={() => navigate("/player")}
//         />
//       </div>
//       <div className="info-container flex column">
//         <h3 className="name" onClick={() => navigate("/player")}>
//           {movieData.name}
//         </h3>
//         <div className="icons flex j-between">
//           <div className="controls flex">
//             <IoPlayCircleSharp
//               title="Play"
//               onClick={() => navigate("/player")}
//             />
//             <RiThumbUpFill title="Like" />
//             <RiThumbDownFill title="Dislike" />
//             {isLiked ? (
//               <BsTrash
//                 title="Remove from List"
//                 onClick={() =>
//                   dispatch(
//                     removeFromLikedMovies(
//                       { movieId: movieData.id, email },
//                       toast.success(
//                         `${movieData.name} successfully remove from List!`
//                       )
//                     )
//                   )
//                 }
//               />
//             ) : (
//               <AiOutlinePlus title="Add to my list" onClick={addToList} />
//             )}
//           </div>
//           <div className="info">
//             <BiChevronDown title="More Info" />
//           </div>
//         </div>
//         <div className="genres flex">
//           <ul className="flex">
//             {movieData.genres.map((genre) => (
//               <li key={genre}>{genre}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
