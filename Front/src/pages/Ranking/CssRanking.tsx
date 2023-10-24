import styled from "styled-components";
export const RankingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const RankingTitle = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TriangleLeft = styled.div`
  position: absolute;
  left: -2rem;
  width: 0;
  height: 0;
  border-top: 2.15rem solid transparent;
  border-right: 2rem solid white;
  border-bottom: 2.15rem solid transparent;
`;

export const TriangleRight = styled.div`
  position: absolute;
  right: -2rem;
  width: 0;
  height: 0;
  border-top: 2.15rem solid transparent;
  border-left: 2rem solid white;
  border-bottom: 2.15rem solid transparent;
`;

export const Line = styled.div`
  width: 100rem;
  position : absolute;
  background: white;
  height:2px;
  z-index:-1;
`;

export const DivUser = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 700px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 1rem;
  background-color: white;


`;
export const RankingName = styled.p`
margin-bottom: 0;
padding: 1rem; 
font-size:1.5rem;

  `;
  export const RankingPoints = styled.p`
  position: absolute;
  right: 10rem;
  top:30%;
    
  `;

export const RankingImg = styled.img`
  position: absolute;
  right: 1rem;
  width: 3.8rem;
  `;
