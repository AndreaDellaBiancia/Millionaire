import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;

export const LogoHome = styled.img`
@media(min-width: 1251px){
  width: 25%;
}

@media (min-width: 800px) and (max-width: 1250px) {
  width: 50%;
}
 width: 70%;
 --animate-duration: 5s;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom:3rem; 
`;

export const Start = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 100px;
  background-color: white;
`;

export const StartBtn = styled.button`
  width: 250px;
  font-size:2rem;
  padding: 0.7rem 2rem;

`;
