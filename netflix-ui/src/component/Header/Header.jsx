import React from "react";
import { StyledHeader } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </StyledHeader>
  );
};

export default Header;
