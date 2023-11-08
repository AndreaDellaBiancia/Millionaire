import styled from "styled-components";


export const AwardsList = styled.ul`
@media (min-width: 1200px) {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0;
}
display: none;

`;
export const AwardItem = styled.li`
@media (min-width: 1200px) {
  font-size: 1.5rem;
  padding: 0.3rem 5rem 0rem;
}
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: gold;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding: 0.1rem 2rem 0rem;
  margin-bottom: 0.5rem;
  background-color: black;
  border: 2px solid gold;
  border-radius: 20px;
`;

export const AwardItemWin = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: black ;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding: 0.3rem 5rem 0rem;
  margin-bottom: 0.5rem;
  background-color: gold;
  border: 2px solid black;
  border-radius: 20px;
`;
