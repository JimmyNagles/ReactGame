import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Grid/Background";
import FourBack from "../components/Grid/FourBack";

const Home = () => {
  return (
    <div>
      <Background clase={"green"}>
        <h2>This centered is the text</h2>
      </Background>
      <Background clase={"blue"}>
        <h2>This centered is the text second screen</h2>
      </Background>
      <Background clase={"brown"}>
        <h2>This centered is the text third screen</h2>
      </Background>

      <FourBack>
        <h2>P1 </h2>
        <h2>P2 </h2>
        <h2>P3 </h2>
        <h2>P4 </h2>
        <h2>P5 </h2>
        <h2>P6 </h2>
      </FourBack>
    </div>
  );
};

export default Home;
