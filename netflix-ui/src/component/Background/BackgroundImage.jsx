import React from "react";
import background from "../../assets/login.jpg";
import { Container } from "./Background.styled";

const BackgroundImage = () => {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
};

export default BackgroundImage;
