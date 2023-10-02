import React, { useState } from "react";

import { Container, ContainerRow } from "./Slider.styled";
import { BiChevronDown } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { RiThumbDownFill, RiThumbUpFill } from "react-icons/ri";
import { IoPlayCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import axios from "axios";
import toast from "react-hot-toast";
import { removeFromLikedMovies } from "../../redux/thunk";
import { AiOutlinePlus } from "react-icons/ai";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w300";

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
    <div
      className="ContainerCard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${base_url}${movieData.image}`}
        alt="card"
        className="row__poster"
        // onClick={() => navigate("/player")}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`${base_url}${movieData.image}`}
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
                  onClick={() => handleClick(movieData)}
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
    </div>
  );
};

const Row = ({ title, data }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleClick = (movieData) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movieData?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <ContainerRow>
        <h2>{title}</h2>

        <div className="row__posters">
          {data.map((movie) => (
            <Card movieData={movie} key={data.id} handleClick={handleClick} />
          ))}
        </div>
      </ContainerRow>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <Container>
      <Row title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <Row title="New Releases" data={getMoviesFromRange(10, 20)} />
      <Row title="Blockbuster Movies" data={getMoviesFromRange(20, 30)} />
      <Row title="Popular on Netflix" data={getMoviesFromRange(30, 40)} />
      <Row title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <Row title="Epics" data={getMoviesFromRange(50, 60)} />
    </Container>
  );
};

export default Slider;
