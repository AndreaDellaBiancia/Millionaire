import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  padding: 0 4rem;
`;


export const QuestionAward = styled.div`
  display: flex;
  justify-content: center;
  p {
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: black;
    background-color: gold;
  }
`;

export const NextQuestion = styled.button`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
`;
