import { useEffect, useState } from "react";
import Answers from "../../components/Answers/Answers";
import Awards from "../../components/Awards/Awards";
import Question from "../../components/Question/Question";
import { HelpContainer, HelpItem } from "./CssGame";

function Game() {
  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ width: "95%", margin: "0 auto" }}
    >
      <div className="row col-12 col-lg-8 ">
        <HelpContainer className="col-12">
          <HelpItem>
            <i className="fa-sharp fa-solid fa-phone-volume"></i>
          </HelpItem>
          <HelpItem style={{ display: "flex", flexDirection: "column" }}>
            <i
              className="fa-sharp fa-solid fa-star-half-stroke"
              style={{ display: "flex", flexDirection: "column" }}
            ></i>
            50 : 50
          </HelpItem>
          <HelpItem>
            <i className="fa-sharp fa-solid fa-people-group"></i>
          </HelpItem>
        </HelpContainer>
        <Question />
        <Answers />
      </div>
      <Awards />
    </div>
  );
}

export default Game;
