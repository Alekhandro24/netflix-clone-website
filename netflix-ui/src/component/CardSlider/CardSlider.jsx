import React, { useRef, useState } from "react";
import Card from "../Card/Card";
import { Container } from "./CardSlider.styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const CardSlider = ({ data, title }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const listRef = useRef();

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

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
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {data.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                handleClick={handleClick}
              />
            );
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Container>
  );
};

export default CardSlider;
