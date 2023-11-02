import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import {
  QuestionContainer,
  QuestionText,
  TriangleLeft,
  TriangleLeft2,
  TriangleRight,
  TriangleRight2,
} from "./CssQuestion";

function Question({ title }: QuestionsAnswers) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <QuestionContainer>
        <TriangleLeft></TriangleLeft>
        <TriangleLeft2></TriangleLeft2>
        <QuestionText>{title}</QuestionText>
        <TriangleRight></TriangleRight>
        <TriangleRight2></TriangleRight2>
      </QuestionContainer>
    </div>
  );
}

export default Question;
