import { HomeContainer, LogoContainer, LogoHome, Start, Title } from "./CssHome";
import logo from "../../assets/images/milionLogo.png";

function Home() {

  return (
    <HomeContainer>
      <Title>Milionaire</Title>
      <LogoContainer>
        <LogoHome src={logo} alt="Qui veut gagner des milions"/>
      </LogoContainer>
      <Start>
        <p>djsddddddddddddddfgggd</p>
      </Start>
    </HomeContainer>
  );
}

export default Home;
