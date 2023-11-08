import styled from "styled-components";

export const Nav = styled.nav`
  margin-bottom: 3rem;
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  font-size: 1.5rem;
  &:hover {
    border-bottom: 3px solid blue;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const NiveauContainer = styled.div`
  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
export const NavItemNiveau = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  font-size: 1.5rem;
`;

export const NavItemLevelSelected = styled.p`
  background-color: black;
  border: 3px solid gold;
  color: gold;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;

export const NavSelect = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  font-size: 1.5rem;

  p {
    margin-bottom: 0;
    text-align: center;
    width: 100%;
  }
  ,
  select {
    font-size: 1.5rem;
    width: 9rem;
    cursor: pointer;
  }

 /*  select option {
   font-size: 1.5rem;
   padding: 2rem !important;   
  } */
`;

export const NavProfile = styled.li`
  font-size: 1.5rem;
`;

export const ButtonPlay = styled.li`
  @media (min-width: 1000px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
  margin-bottom: 1rem;
`;
