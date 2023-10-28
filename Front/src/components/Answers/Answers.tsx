import AnswerItem from "./AnswerItem";

function Answers() {
  const answer1 = "cippo";
  const answer2 = "razzo";
  const answer3 = "macchina";
  const answer4 = "leone";

  return (
    <div className="row col-12 d-flex justify-content-center m-0" style={{height: "fit-content"}}>
      <AnswerItem letter={"A"} answer={answer1}/>
      <AnswerItem letter={"B"} answer={answer2}/>
      <AnswerItem letter={"C"} answer={answer3}/>
      <AnswerItem letter={"D"} answer={answer4}/>
    </div>
  );
}

export default Answers;
