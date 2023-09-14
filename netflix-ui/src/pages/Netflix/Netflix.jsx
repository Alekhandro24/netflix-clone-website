import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import backgroundImage from "../../assets/home.jpg";
import MovieLogo from "../../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Container } from "./Netflix.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../../redux/thunk";
import { selectGenresLoaded, selectMovies } from "../../redux/selectors";
import Slider from "../../component/Slider/Slider";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector(selectGenresLoaded);
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [dispatch, genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="log">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
};

export default Netflix;
