import { HomeContainer, LogoContainer, LogoHome, StartBtn, Title } from "./CssHome";
import logo from "../../assets/images/milionLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


function Home() {

  return (
    <HomeContainer>
      <Title>Le Millionaire</Title>
      <LogoContainer>
        <LogoHome src={logo} alt="Qui veut gagner des milions"/>
      </LogoContainer> 
      <Link to="/jeu"><StartBtn type="button" className="btn btn-outline-light">JOUER</StartBtn></Link>
     
    </HomeContainer>
  );
}

export default Home;
