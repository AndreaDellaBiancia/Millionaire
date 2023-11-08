import styled from "styled-components";

export const Container = styled.div`
@media (min-width: 1200px) {
padding: 0 4rem
}

display: flex;
flex-wrap: wrap;  
justify-content: center; 
padding: 0;
width: 100%;
`;

export const GameContainer = styled.div`
@media (min-width: 1200px) {
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 ;
}

width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
  
`;

export const MenuContainer = styled.div`
@media (min-width: 1200px) {
  margin-bottom: 7rem;
}

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  margin-bottom: 2rem;

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
