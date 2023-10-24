import { HomeContainer, LogoContainer, LogoHome, StartBtn, Title } from "./CssHome";
import logo from "../../assets/images/milionLogo.png";


function Home() {

  return (
    <HomeContainer>
      <Title>Le Millionaire</Title>
      <LogoContainer>
        <LogoHome src={logo} alt="Qui veut gagner des milions"/>
      </LogoContainer> 
      <StartBtn type="button" className="btn btn-outline-light">JOUER</StartBtn>
     
    </HomeContainer>
  );
}

export default Home;
