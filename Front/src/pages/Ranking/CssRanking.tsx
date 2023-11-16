import styled from "styled-components";
export const RankingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .popup-inscription{
    position: absolute;
    top: 8rem;
    left: 2rem;
    background-color: gold;
    padding: 1rem 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    animation-duration: 3s;
  }
`;

export const RankingTitle = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: gold;
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