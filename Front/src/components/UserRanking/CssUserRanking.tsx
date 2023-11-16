import styled from "styled-components";

export const DivUser = styled.div`
  @media (min-width: 700px) {
    width: 50%;
    font-size: 20px;
    border-right: 0;
    border-left: 0;
  }
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 90%;
  font-weight: bold;
  font-size: 1rem;
  border: 2.8px solid #e2bd00;

  margin-bottom: 1rem;
  background-color: white;
`;

export const TriangleLeft = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    left: -2.2rem;
    width: 0;
    height: 0;
    border-top: 2.33rem solid transparent;
    border-right: 2.2rem solid #e2bd00;
    border-bottom: 2.33rem solid transparent;
    z-index: -1;
    display: block;
  }
  display: none;
`;

export const TriangleLeft2 = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    left: -2rem;
    width: 0;
    height: 0;
    border-top: 2.2rem solid transparent;
    border-right: 2.1rem solid white;
    border-bottom: 2.2rem solid transparent;
    display: block;
  }
  display: none;
`;

export const TriangleRight = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    right: -2.2rem;
    width: 0;
    height: 0;
    border-top: 2.33rem solid transparent;
    border-left: 2.2rem solid #e2bd00;
    border-bottom: 2.33rem solid transparent;
    z-index: -1;
    display: block;
  }
  display: none;
`;

export const TriangleRight2 = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    right: -2rem;
    width: 0;
    height: 0;
    border-top: 2.2rem solid transparent;
    border-left: 2.1rem solid white;
    border-bottom: 2.2rem solid transparent;
    display: block;
  }
  display: none;
`;

export const Line = styled.div`
  @media (min-width: 1000px) {
    width: 80%;
    position: absolute;
    top: 34px;
    background: #e2bd00;
    height: 2px;
    z-index: -1;
    display: block;
  }
  display: none;
`;

export const RankingName = styled.div`
  @media (min-width: 500px) {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  padding: 1rem;
  display: flex;
`;

export const RankingPlace = styled.div`
  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  margin-left: 2rem;
  padding: 1rem;
  display: flex;
`;

export const RankingPoints = styled.div`
  margin-right: 8rem;
  top: 30%;
`;

export const RankingImg = styled.img`
  @media (min-width: 500px) {
    width: 3.8rem;
  }
  position: absolute;
  right: 1rem;
  width: 2.8rem;
`;
