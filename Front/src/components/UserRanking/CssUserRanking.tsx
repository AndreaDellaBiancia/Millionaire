import styled from "styled-components";
export const TriangleLeft = styled.div`
  position: absolute;
  left: -2.2rem;
  width: 0;
  height: 0;
  border-top: 2.33rem solid transparent;
  border-right:  2.20rem solid #e2bd00;
  border-bottom: 2.33rem solid transparent;
  z-index:-1
`;

export const TriangleLeft2 = styled.div`
  position: absolute;
  left: -2rem;
  width: 0;
  height: 0;
  border-top: 2.20rem solid transparent;
  border-right: 2.1rem solid white;
  border-bottom: 2.20rem solid transparent;
`;

export const TriangleRight = styled.div`
  position: absolute;
  right: -2.2rem;
  width: 0;
  height: 0;
  border-top: 2.33rem solid transparent;
  border-left: 2.20rem solid #e2bd00;
  border-bottom: 2.33rem solid transparent;
  z-index:-1
`;

export const TriangleRight2 = styled.div`
  position: absolute;
  right: -2rem;
  width: 0;
  height: 0;
  border-top: 2.20rem solid transparent;
  border-left: 2.1rem solid white;
  border-bottom: 2.20rem solid transparent;
`;

export const Line = styled.div`
  width: 100rem;
  position : absolute;
  background: #e2bd00;
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
  border-top: 2.8px solid #e2bd00;
  border-bottom: 2.8px solid #e2bd00;
  
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
