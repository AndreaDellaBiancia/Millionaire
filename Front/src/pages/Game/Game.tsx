import { useEffect, useState } from "react";
import Answers from "../../components/Answers/Answers";
import Awards from "../../components/Awards/Awards";
import Question from "../../components/Question/Question";
import { MenuContainer, NextQuestion, QuestionAward } from "./CssGame";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getQuestions } from "../../fetch/fetchQuestions";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import GoodAnsw from "../../interfaces/GoodAnswInterface";
import BadAnsw from "../../interfaces/BadAnswInterface";
import { setIsStartTimer, setQuestionNb } from "../../store/gameReducer";
import PointsGameCounter from "../../components/PointsGameCounter/PointsGameCounter";
import HelpContainer from "../../components/HelpContainer/HelpContainer";
import Timer from "../../components/Timer/Timer";
import { setIsAskPublic, setIsCallHome, setIsHalfPossibility } from "../../store/helpReducer";

function Game() {
  const [questions, setQuestions] = useState<QuestionsAnswers[]>([]);
  const [questionToPlay, setQuestionToPlay] = useState<
    QuestionsAnswers | undefined
  >();
  const [goodAnswer, setGoodAnswer] = useState<GoodAnsw | undefined>();
  const [badAnswers, setBadAnswers] = useState<BadAnsw[] | undefined>([]);

  const level = useSelector((state: RootState) => state.game.level);
  const questionNb = useSelector((state: RootState) => state.game.questionNb);
  const isGoodAnswer = useSelector(
    (state: RootState) => state.game.isGoodAnswer
  );
  const awards = useSelector((state: RootState) => state.awards.awards);
  const pointsGame = useSelector((state: RootState) => state.awards.pointsGame);
  const isNewGame = useSelector((state: RootState) => state.game.isNewGame);
  const isStartTimer = useSelector((state: RootState) => state.game.isStartTimer);

  let answers: string[] = []; // Tableau pour stocker les réponses

  const dispatch = useDispatch();

  // On récupére les données au chargement du composant
  useEffect(() => {
    async function fetchData() {
      const questionsDatas = await getQuestions(level);
      setQuestions(questionsDatas);
      setGoodAnswer(questionsDatas[0].goodAnsw);
      setBadAnswers(questionsDatas[0].badAnsw);
      setQuestionToPlay(questionsDatas[0]);
      dispatch(setQuestionNb(0));
      dispatch(setIsAskPublic(false));
      dispatch(setIsCallHome(false));
      dispatch(setIsHalfPossibility(false));
      dispatch(setIsStartTimer(!isStartTimer))
    }
    fetchData();
  }, [isNewGame]);

  // Mise à jour des réponses en fonction du numéro de question
  useEffect(() => {
    setGoodAnswer(questionToPlay?.goodAnsw);
    setBadAnswers(questionToPlay?.badAnsw);
    if (goodAnswer) {
      answers?.push(goodAnswer.title); // Ajoute la bonne réponse au tableau des réponses
    }
    if (badAnswers) {
      badAnswers.forEach((answer) => {
        answers?.push(answer.title); // Ajoute les mauvaises réponses au tableau des réponses
      });
    }
  }, [questionNb]);

  function nextQuestion() {
    if (questionNb < 14) {
      dispatch(setQuestionNb(questionNb + 1)); // Passer à la question suivante
      setQuestionToPlay(questions[questionNb + 1]);
    }
  }

  return (
    <div
      className="row justify-content-center align-items-between"
      style={{ width: "95%", margin: "0 auto" }}
    >
      <div className="row col-12 col-lg-8 ">
        <MenuContainer>
          <HelpContainer {...questionToPlay} />
          <Timer />
          <PointsGameCounter points={pointsGame} />
        </MenuContainer>
        <div>
          <QuestionAward>
            <p>
              Question à{" "}
              {awards[questionNb] === 1000000
                ? "1 MILLION"
                : awards[questionNb]}{" "}
              €
            </p>
          </QuestionAward>
          <Question {...questionToPlay} />
          <Answers goodAnswer={goodAnswer} badAnswers={badAnswers} />
          {isGoodAnswer && (
            <div className="d-flex justify-content-center mt-2">
              <NextQuestion
                className="btn btn-outline-warning"
                onClick={nextQuestion}
              >
                Question suivante
              </NextQuestion>
            </div>
          )}
        </div>
      </div>
      <Awards />
    </div>
  );
}

export default Game;
