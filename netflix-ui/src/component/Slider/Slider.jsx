import React, { useEffect, useState } from "react";
// import CardSlider from "../CardSlider/CardSlider";
import { Container, ContainerRow } from "./Slider.styled";

const base_url = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, data }) => {
  return (
    <ContainerRow>
      <h2>{title}</h2>

      <div className="row__posters">
        {data.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.image}`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </ContainerRow>
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

// const Slider = ({ movies }) => {
//   const getMoviesFromRange = (from, to) => {
//     return movies.slice(from, to);
//   };

//   return (
//     <Container>
//       <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
//       <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
//       <CardSlider
//         title="Blockbuster Movies"
//         data={getMoviesFromRange(20, 30)}
//       />
//       <CardSlider
//         title="Popular on Netflix"
//         data={getMoviesFromRange(30, 40)}
//       />
//       <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
//       <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
//     </Container>
//   );
// };

export default Slider;
