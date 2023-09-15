import React, { useEffect, useState } from "react";
import { Container } from "./TVShows.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectGenres,
  selectGenresLoaded,
  selectMovies,
} from "../../redux/selectors";
import { fetchMovies, getGenres } from "../../redux/thunk";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import Navbar from "../../component/Navbar/Navbar";
import Slider from "../../component/Slider/Slider";
import NotAvailable from "../../component/NotAvailable/NotAvailable";
import SelectGenre from "../../component/SelectGenre/SelectGenre";

const TVShows = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector(selectGenresLoaded);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
  }, [dispatch, genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
};

export default TVShows;
