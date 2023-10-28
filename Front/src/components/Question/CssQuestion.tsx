import styled from "styled-components";

export const QuestionContainer = styled.div`
@media (max-width:480px) {
  max-width: 300px;
}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  height: 150px;
  font-weight: bold;
  border-top: 4px solid #e2bd00;
  border-bottom: 4px solid #e2bd00;
  margin-bottom: 4rem;
  background-color: white;
`;

export const TriangleLeft = styled.div`
  position: absolute;
  left: -3.2rem;
  width: 0;
  height: 0;
  border-top: 4.8rem solid transparent;
  border-right: 3.3rem solid #e2bd00;
  border-bottom: 4.8rem solid transparent;
  z-index: -1;
`;

export const TriangleLeft2 = styled.div`
  position: absolute;
  left: -2.9rem;
  width: 0;
  height: 0;
  border-top: 4.5rem solid transparent;
  border-right: 3rem solid white;
  border-bottom: 4.5rem solid transparent;
`;

export const TriangleRight = styled.div`
  position: absolute;
  right: -3.2rem;
  width: 0;
  height: 0;
  border-top: 4.8rem solid transparent;
  border-left: 3.3rem solid #e2bd00;
  border-bottom: 4.8rem solid transparent;
  z-index: -1;
`;

export const TriangleRight2 = styled.div`
  position: absolute;
  right: -2.9rem;
  width: 0;
  height: 0;
  border-top: 4.5rem solid transparent;
  border-left: 3rem solid white;
  border-bottom: 4.5rem solid transparent;
`;

export const QuestionText = styled.p`
@media (max-width:480px) {
  margin-bottom: 0;
  padding: 0.5rem;
  font-size: 0.6rem;
}
@media (max-width:768px) {
  margin-bottom: 0;
  padding: 0.5rem;
  font-size: 1rem;
}
  margin-bottom: 0;
  padding: 1rem;
  font-size: 1.6rem;
`;
