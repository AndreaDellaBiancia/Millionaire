import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  .dataTables_wrapper{
    width: 90%;
  }

  .btn-new-question{
    padding: 0.8rem;
    font-size: 1rem;
    margin-right: 2rem;
  }

`;
export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  max-height: 57vh;

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

  .col-admin-view,
  .col-admin-update,
  .col-admin-delete {
    width: 3%;
  }

  .col-admin-question {
    width: 55%;
  }

  .col-admin-award {
    width: 15%;
  }

  .col-admin-level {
    width: 15%;
  }
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
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  color: gold;
`;

export const ColItem = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1.3rem;
  color: white;
`;

export const SearchContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-tems: center;
justify-content: center;
width: 15rem;
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