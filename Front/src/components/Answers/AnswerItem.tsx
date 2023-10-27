import AnswerItemI from "../../interfaces/AnswerItemInterface";
import {
  AnswerContainer,
  Line,
  TriangleLeft,
  TriangleLeft2,
  TriangleRight,
  TriangleRight2,
} from "./CssAnswers";

function AnswerItem({ letter, answer }: AnswerItemI) {
  return (
      <AnswerContainer>
        <TriangleLeft></TriangleLeft>
        <TriangleLeft2></TriangleLeft2>
          <div style={{position:"absolute"}}>{letter} :</div> <p>{answer}</p>
        <Line></Line>
        <TriangleRight></TriangleRight>
        <TriangleRight2></TriangleRight2>
      </AnswerContainer>
  );
}

export default AnswerItem;
