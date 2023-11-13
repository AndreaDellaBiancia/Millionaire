import styled from "styled-components";

export const Container = styled.div`
@media(min-width: 1251px){
  width: 300px;
}
  position: absolute;
  right: 0;
  top: 90px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0  7px 10px black;
`;

export const FormLogin = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  label{
    width: 100%;
    text-align: center;
  }
`;

export const RegisterLink = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: underline;
  cursor: pointer;
`;

