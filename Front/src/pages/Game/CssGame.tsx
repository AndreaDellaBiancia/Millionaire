import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  padding: 0 4rem;
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;


export const Timer = styled.div`
  background-color: white;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
 // background-color: black;
 // color: gold;
  position: absolute;
`;
