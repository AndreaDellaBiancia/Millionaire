import { HomeContainer, LogoContainer, LogoHome, StartBtn, Title } from "./CssHome";
import logo from "../../assets/images/milionLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


function Home() {
  const questio = useSelector((state: RootState) => state.questions.questions)

  console.log('====================================');
  console.log(questio);
  console.log('====================================');
  return (
    <HomeContainer>
      <Title>Le Millionaire</Title>
      <LogoContainer>
        <LogoHome src={logo} alt="Qui veut gagner des milions"/>
      </LogoContainer> 
      <Link to="/jeux"><StartBtn type="button" className="btn btn-outline-light">JOUER</StartBtn></Link>
     
    </HomeContainer>
  );
}

export default Home;
