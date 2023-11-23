import styled from "styled-components";

export const AdminNav = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gold;
  padding: 0.5rem 0 0.5rem 1rem;
  position: relative;
  top: -3rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  a {
    color: black;
  }
`;

export const Title = styled.h3`
  display: flex;
  color: black;
  margin-bottom: 0;
`;

export const LinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  font-size: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
  color:  ${(props) => props.color};
`;
