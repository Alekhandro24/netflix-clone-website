import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import video from "../../assets/beachVid.mp4";
import { Container } from "./Player.styled";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop muted controls></video>
      </div>
    </Container>
  );
};

export default Player;
