import styled from "styled-components";

export const HelpContainer = styled.div`
 display: flex;
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
  i{
    font-size:2rem;
    color: gold;
  }
`;

export const QuestionAward = styled.div`
display: flex;
justify-content: center;
p{
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: black;
  background-color: gold;
}
`;