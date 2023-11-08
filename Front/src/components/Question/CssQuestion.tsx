import styled from "styled-components";

export const QuestionContainer = styled.div`
  @media (min-width: 1200px) {
    height: 150px;

    margin-bottom: 4rem;
    border-right: 0;
  border-left: 0;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
  height: 100px;
  font-weight: bold;
  border: 4px solid #e2bd00;
  margin-bottom: 2rem;
  background-color: white;
`;

export const TriangleLeft = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    left: -3.2rem;
    width: 0;
    height: 0;
    border-top: 4.8rem solid transparent;
    border-right: 3.3rem solid #e2bd00;
    border-bottom: 4.8rem solid transparent;
    z-index: -1;
    display: block;
  }

  display: none;
`;

export const TriangleLeft2 = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    left: -2.9rem;
    width: 0;
    height: 0;
    border-top: 4.5rem solid transparent;
    border-right: 3rem solid white;
    border-bottom: 4.5rem solid transparent;
    display: block;
  }
  display: none;
`;

export const TriangleRight = styled.div`
@media (min-width: 1200px) {
  position: absolute;
  right: -3.2rem;
  width: 0;
  height: 0;
  border-top: 4.8rem solid transparent;
  border-left: 3.3rem solid #e2bd00;
  border-bottom: 4.8rem solid transparent;
  z-index: -1;
  display: block;
}
  display:none;
`;

export const TriangleRight2 = styled.div`
@media (min-width: 1200px) {
  position: absolute;
  right: -2.9rem;
  width: 0;
  height: 0;
  border-top: 4.5rem solid transparent;
  border-left: 3rem solid white;
  border-bottom: 4.5rem solid transparent;
  display: block;
}
  display:none;
`;

export const QuestionText = styled.p`
  @media (min-width: 900px) {
    margin-bottom: 0;
    padding: 1rem;
    font-size: 1.6rem;
  }

  margin-bottom: 0;
  //padding: 1rem;
  font-size: 1.2rem;
`;
