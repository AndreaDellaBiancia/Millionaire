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
    width: 10.5rem;
    cursor: pointer;
  }
  select option {
    font-size: 1.8rem;
  }
`;

export const NavProfile = styled.li`
  @media (min-width: 992px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 2rem;

  p {
    margin-right: 0.5rem;
    font-weight: bold;
  }

  i{
    margin: 1rem;
  }
`;

export const ButtonPlay = styled.li`
  @media (min-width: 1000px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
  margin-bottom: 1rem;
`;

export const ProfileOptionContainer = styled.li`
  @media (min-width: 992px) {
    position: absolute;
    right: 0;
    top: 6rem;
    width: 15rem;

    div {
      width: 15rem;
    }

  }

  background-color: white;
  width: 100%;

  div {
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:first-child {
    border-bottom: 3px solid black;
  }

  div:hover {
    background-color: #f3c327;
    cursor: pointer;
  }
`;
