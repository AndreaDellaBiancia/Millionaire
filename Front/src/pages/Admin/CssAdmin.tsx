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

`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
  max-height: 60vh;

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
  position: relative; /* Ajoutez cette ligne */

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
  margin: 1.2rem 0;
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
