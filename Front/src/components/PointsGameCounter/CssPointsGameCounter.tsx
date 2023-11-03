import styled from "styled-components";


export const PointsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;

export const Points = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: 6rem;
height: 6rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
color: gold;
border: 2px solid gold;
p{
  margin: 0;
}
& p:nth-child(1) {
  margin-top: 0.5rem;
  }
& p:nth-child(2) {
font-size: 2rem;
}
`;


