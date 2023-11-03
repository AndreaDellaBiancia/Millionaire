import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 33%;
`;

export const HelpItem = styled.div`
  background-color: black;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: gold;
  border: 2px solid gold;
  cursor: pointer;
  i {
    font-size: 2rem;
    color: gold;
  }
`;