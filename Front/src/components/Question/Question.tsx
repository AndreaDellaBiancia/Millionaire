import { useEffect } from "react";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import {
  QuestionContainer,
  QuestionText,
  TriangleLeft,
  TriangleLeft2,
  TriangleRight,
  TriangleRight2,
} from "./CssQuestion";
import { useDispatch } from "react-redux";
import { setIsAnswerSelected } from "../../store/gameReducer";

function Question({ title }: QuestionsAnswers) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsAnswerSelected(false));
  }, [title]);

  return (
    <div style={{display:"flex", justifyContent: "center"}}>
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
