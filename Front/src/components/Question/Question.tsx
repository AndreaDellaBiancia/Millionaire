import {
  QuestionContainer,
  QuestionText,
  TriangleLeft,
  TriangleLeft2,
  TriangleRight,
  TriangleRight2,
} from "./CssQuestion";

function Question() {
  return (
    <div className="col-12 d-flex justify-content-center">
      <QuestionContainer>
        <TriangleLeft></TriangleLeft>
        <TriangleLeft2></TriangleLeft2>
        <QuestionText>Lorem ipsum dolor sit amet minus veritatis recusandae a eius cum quos accusantium dolorem tenetur corrupti autem.</QuestionText>
        <TriangleRight></TriangleRight>
        <TriangleRight2></TriangleRight2>
      </QuestionContainer>
    </div>
  );
}

export default Question;
