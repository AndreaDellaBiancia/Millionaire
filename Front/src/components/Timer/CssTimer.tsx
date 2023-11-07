import styled from "styled-components";
interface DangerTimeProps {
  isDangerTime: boolean;
}

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  color: white;
  font-size: 1.5rem;
`;


export const Time = styled.div<DangerTimeProps>`
 
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: ${(props) => props.isDangerTime ? 'red' : 'white' };
`;