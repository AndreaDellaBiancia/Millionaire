import { useEffect, useState } from "react";
import Answers from "../../components/Answers/Answers";
import Awards from "../../components/Awards/Awards";
import Question from "../../components/Question/Question";
import {
  MenuContainer,
  NextQuestion,
  QuestionAward,
  Timer,
  TimerContainer,
} from "./CssGame";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getQuestions } from "../../fetch/fetchQuestions";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import GoodAnsw from "../../interfaces/GoodAnswInterface";
import BadAnsw from "../../interfaces/BadAnswInterface";
import { setQuestionNb } from "../../store/gameReducer";
import PointsGameCounter from "../../components/PointsGameCounter/PointsGameCounter";
import HelpContainer from "../../components/HelpContainer/HelpContainer";

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

  let answers: string[] = [];

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const questionsDatas = await getQuestions(level);
      setQuestions(questionsDatas);
      setQuestionToPlay(questionsDatas[0]);
      dispatch(setQuestionNb(0));
      setGoodAnswer(questionsDatas[0].goodAnsw);
      setBadAnswers(questionsDatas[0].badAnsw);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setGoodAnswer(questionToPlay?.goodAnsw);
    setBadAnswers(questionToPlay?.badAnsw);
    if (goodAnswer) {
      answers?.push(goodAnswer.title);
    }
    if (badAnswers) {
      badAnswers.forEach((answer) => {
        answers?.push(answer.title);
      });
    }
  }, [questionNb]);

  function nextQuestion() {
    if (questionNb < 14) {
      dispatch(setQuestionNb(questionNb + 1));
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
          <HelpContainer  {...questionToPlay}/>
          <TimerContainer>
            <Timer>timer</Timer>
          </TimerContainer>
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
