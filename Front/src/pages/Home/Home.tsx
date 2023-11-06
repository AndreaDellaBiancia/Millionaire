import {
  HomeContainer,
  LogoContainer,
  LogoHome,
  StartBtn,
  Title,
} from "./CssHome";
import logo from "../../assets/images/milionLogo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPointsGame } from "../../store/awardsReducer";
import {
  setChoosedAnswer,
  setIsAskPublic,
  setIsHalfPossibility,
  setQuestionNb,
  setQuestions,
} from "../../store/gameReducer";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPointsGame(0));
    dispatch(setQuestions([]));
    dispatch(setQuestionNb(0));
    dispatch(setChoosedAnswer({}));
    dispatch(setIsHalfPossibility(false));
    dispatch(setIsAskPublic(false));
  }, []);

  return (
    <HomeContainer>
      <Title>Le Millionaire</Title>
      <LogoContainer>
        <LogoHome src={logo} alt="Qui veut gagner des milions" />
      </LogoContainer>
      <Link to="/jeu">
        <StartBtn type="button" className="btn btn-outline-light">
          JOUER
        </StartBtn>
      </Link>
    </HomeContainer>
  );
}

export default Home;
