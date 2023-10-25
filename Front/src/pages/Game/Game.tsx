import Answers from "../../components/Answers/Answers";
import Awards from "../../components/Awards/Awards";
import Question from "../../components/Question/Question";

function Game() {
  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ width: "95%", margin: "0 auto" }}
    >
      <div className="row col-12 col-lg-8 ">
        <div className="col-12">aides</div>
        <Question />
        <Answers />
      </div>
      <Awards />
    </div>
  );
}

export default Game;
