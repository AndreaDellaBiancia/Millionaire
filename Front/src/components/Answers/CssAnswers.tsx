import styled from "styled-components";
export const Container = styled.div`
  @media (min-width: 900px) {
    width: 50%;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const AnswerContainer = styled.div`
@media (min-width: 900px) {
  width: 75%;
}
  position: relative;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-top: 2.8px solid #e2bd00;
  border-bottom: 2.8px solid #e2bd00;
  margin: 0 2.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.color};
 
  p{
    width: 100%;
    margin: 0;
    text-align: center;
  }

  &:hover{
    cursor: pointer;
    }
  }


`;

export const TriangleLeft = styled.div`
  position: absolute;
  left: -2.2rem;
  width: 0;
  height: 0;
  border-top: 2.33rem solid transparent;
  border-right: 2.2rem solid #e2bd00;
  border-bottom: 2.33rem solid transparent;
  z-index: -1;
`;

export const TriangleLeft2 = styled.div`
  position: absolute;
  left: -2rem;
  width: 0;
  height: 0;
  border-top: 2.2rem solid transparent;
  border-right: 2.1rem solid ${(props) => props.color};
  border-bottom: 2.2rem solid transparent;
`;

export const TriangleRight = styled.div`
  position: absolute;
  right: -2.2rem;
  width: 0;
  height: 0;
  border-top: 2.33rem solid transparent;
  border-left: 2.2rem solid #e2bd00;
  border-bottom: 2.33rem solid transparent;
  z-index: -1;
`;

export const TriangleRight2 = styled.div`
  position: absolute;
  right: -2rem;
  width: 0;
  height: 0;
  border-top: 2.2rem solid transparent;
  border-left: 2.1rem solid ${(props) => props.color};
  border-bottom: 2.2rem solid transparent;
`;

export const Line = styled.div`
  @media (min-width: 1000px) {
    width: 100%;
    position: absolute;
    top: 34px;
    background: #e2bd00;
    height: 2px;
    z-index: -1;
    display: block;
  }
  display: none;
`;

export const RankingName = styled.p`
  width: 100%;
  margin: 0;
  text-align: center;
`;
