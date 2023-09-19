import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMovies } from "../../redux/selectors";
import { getUserLikedMovies } from "../../redux/thunk";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { Container } from "./UserLiked.styled";
import Navbar from "../../component/Navbar/Navbar";
import Card from "../../component/Card/Card";

const UserLiked = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);

  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
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
        <h1>My List</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return (
              <Card
                key={movie.id}
                movieData={movie}
                index={index}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default UserLiked;
