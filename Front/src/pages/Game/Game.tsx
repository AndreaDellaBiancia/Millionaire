import { useEffect, useState } from "react";
import Answers from "../../components/Answers/Answers";
import Awards from "../../components/Awards/Awards";
import Question from "../../components/Question/Question";
import { HelpContainer, HelpItem } from "./CssGame";
import { setQuestions } from "../../store/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";
import { RootState } from "../../store/store";

function Game() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuestions(["question1", "question2", "question3"]));
  }, []);
  const level = useSelector((state: RootState) => state.game.level)

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({level}),
    };
    fetch("http://localhost:5000/api/game", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
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
