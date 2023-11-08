import styled from "styled-components";
interface HelpItemProps {
  isused: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 33%;
`;

export const HelpItem = styled.div<HelpItemProps>`
  @media (min-width: 450px) {
    height: 5rem;
    width: 5rem;
    span {
      font-size: 1rem;
    }

    i {
      font-size: 2rem !important;
      color: gold;
    }

    span {
      font-size: 1rem !important;
    }
  }

  background-color: black;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gold;
  border: 2px solid gold;
  cursor: pointer;
  opacity: ${(props) => (props.isused ? 0.5 : 1)};

  i {
    font-size: 1.2rem;
    color: gold;
  }

  span {
    font-size: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => (props.isused ? "" : "gold")};
    i {
      color: ${(props) => (props.isused ? "" : "black")};
    }
    span {
      color: ${(props) => (props.isused ? "" : "black")};
    }
  }
`;
