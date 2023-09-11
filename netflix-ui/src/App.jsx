import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Netflix from "./pages/Netflix/Netflix";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </>
  );
};

export default App;
