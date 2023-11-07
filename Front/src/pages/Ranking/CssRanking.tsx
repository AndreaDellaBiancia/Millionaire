import styled from "styled-components";
export const RankingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const RankingTitle = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: #e2bd00;
  text-transform: uppercase;
  margin-bottom: 2rem;  

@media (min-width: 361px) {
  font-size: 3rem;
}
`;

export const RankingList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;