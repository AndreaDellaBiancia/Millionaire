import styled from "styled-components";
export const RankingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const RankingTitle = styled.p`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
  margin-top: 0;
`; 

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  
  article {
    dispklay: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 30px 30px 30px 30px;
    border-collapse: collapse;
    text-align: center;
    width: 100%;
    color: red;
    font-size: 20px;
    margin-bottom: 1rem;
    background-color: white;
  }
`;

