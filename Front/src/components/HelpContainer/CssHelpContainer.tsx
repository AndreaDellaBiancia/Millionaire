import styled from "styled-components";
interface HelpItemProps {
  isUsed: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  width: 33%;
`;

export const HelpItem = styled.div<HelpItemProps>`
  background-color: black;
  height: 6rem;
  width: 6rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: gold;
  border: 2px solid gold;
  cursor: pointer;
  opacity: ${(props) => (props.isUsed ? 0.5 : 1)};

  i {
    font-size: 2em;
    color: gold;
  }

  &:hover{
    background-color: ${(props) => (props.isUsed ? "" : "gold")};
    i{
      color: ${(props) => (props.isUsed ? "" : "black")};
    }
    span {
      color: ${(props) => (props.isUsed ? "" : "black")};
    }
  }
`;