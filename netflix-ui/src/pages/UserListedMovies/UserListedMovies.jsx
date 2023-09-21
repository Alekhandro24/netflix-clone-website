import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMovies } from "../../redux/selectors";
import { getUserLikedMovies } from "../../redux/thunk";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { Container } from "./UserListedMovies.styled";
import Navbar from "../../component/Navbar/Navbar";
import Card from "../../component/Card/Card";

const UserListedMovies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(selectMovies);
  console.log("movies", movies);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [dispatch, email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        {!movies ? (
          <h1>My List</h1>
        ) : (
          <>
            <h1>My List</h1>
            <div className="grid flex">
              {movies.map((movie, index) => {
                return (
                  <Card
                    movieData={movie}
                    index={index}
                    key={movie.id}
                    isLiked={true}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default UserListedMovies;

// {
//   movies.length ? <Slider movies={movies} /> : <NotAvailable />;
// }

// (<h3>There isn't movies on the list</h3>)
