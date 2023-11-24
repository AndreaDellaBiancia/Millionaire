import styled from "styled-components";

export const ProfileContainer = styled.div`
  @media (min-width: 1400px) {
    width: 70%;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

export const Name = styled.h2`
  @media (min-width: 1000px) {
    font-size: 4rem;
  }
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  font-size: 2rem;
  color: white;
  text-transform: capitalize;
`;

export const InfoContainer = styled.div`
  @media (min-width: 1000px) {
    margin: 2rem auto;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  margin: 1rem auto;
`;

export const Points = styled.h3`
  @media (min-width: 1000px) {
    font-size: 2.5rem;
    width: 50%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  font-size: 1.5rem;
  color: white;

  span {
    color: #fdd835;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export const Place = styled.h3`
  @media (min-width: 1000px) {
    font-size: 2.5rem;
    width: 50%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  font-size: 1.5rem;
  color: white;

  span {
    color: #fdd835;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export const CoinImg = styled.img`
  @media (min-width: 1000px) {
    width: 4rem;
  }
  width: 3rem;
  margin-right: 1rem;
`;

export const RankingImg = styled.img`
  @media (min-width: 1000px) {
    width: 4rem;
  }
  width: 3rem;
  margin-left: 2rem;
`;

export const TableTitle = styled.h4`
  @media (min-width: 1000px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const Table = styled.table`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  width: 100%;
 // margin-top: 1rem;
`;

export const Ligne = styled.tr`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  margin: 0.3rem auto;
`;

export const ColTitle = styled.th`
@media (min-width: 1000px) {
  font-size: 1.5rem;
}

@media (min-width: 650px) and (max-width: 800px) {
  font-size: 1.3rem;
  i{
    display: none !important;
  }
}

@media (min-width: 0px) and (max-width: 649px) {
  font-size: 1rem;
  i{
    display: none !important;
  }
}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 25%;
  color: white;

  i{
    margin-left: 1rem; 
  }
}
`;

export const ColItem = styled.td`
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (min-width: 650px) and (max-width: 800px) {
    font-size: 1.3rem;
  }

  @media (min-width: 0px) and (max-width: 649px) {
    font-size: 0.8rem;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 20%;
  font-size: 1rem;
  font-weight: bold;
  color: #fdd835;
`;

export const NoGames = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const HelpItem = styled.div`
  @media (min-width: 950px) {
    height: 3.2rem;
    width: 3.2rem;
    span {
      font-size: 1rem;
    }

    i {
      font-size: 1.2rem;
      color: gold;
    }
  }

  background-color: black;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gold;
  border: 2px solid gold;

  i {
    font-size: 1.2rem;
    color: gold;
  }
`;

