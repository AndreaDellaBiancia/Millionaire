import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  max-height: 65vh;

  /* Masquer la barre de défilement pour les navigateurs WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  width: 100%;
  margin-top: 1rem;
  position: relative;

  
`;
export const LineTitle = styled.tr`
  display: flex;
  background-color: #2f2fcd;
  width: 100%;
  padding: 0.7rem 0;
  border-bottom: 1px solid gold;
`;

export const Line = styled.tr`
  display: flex;
  padding: 0;
  width: 100%;
  padding: 0.7rem 0;
  border-bottom: 1px solid gold;
  .title-line {
    position: fixed;
  }
`;

export const ColTitle = styled.th`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  color: gold;
  width: 23%;

  &:last-child{
    width:8%
  }
`;

export const ColItem = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1.6rem;
  color: white;
  width: 23%;

  &:last-child{
    width:8%
  }
`;

export const SearchContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-tems: center;
justify-content: center;
width: 30rem;
text-align: center;

label{
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

input {
  border: 2mm ridge rgb(255, 255, 255, .6);
  font-size: 1.2rem;
}
`;
