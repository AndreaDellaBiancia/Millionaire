import { useDispatch, useSelector } from "react-redux";
import { Time, TimerContainer } from "./CssTimer";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endGame } from "../../outils/endGame";
import { setIsAnswerSelected } from "../../store/gameReducer";

function Timer() {
  const [time, setTime] = useState<number>(20);
  const [isDangerTime, setIsDangerTime] = useState<boolean>(false);

  const isStartTimer = useSelector(
    (state: RootState) => state.game.isStartTimer
  );
  const isNewGame = useSelector((state: RootState) => state.game.isNewGame);

  const isAnswerSelected = useSelector(
    (state: RootState) => state.game.isAnswerSelected
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Utilise un effet pour réinitialiser le compte à rebours à 30 lorsque isStartTimer change
  useEffect(() => {
    setTime(20);
    setIsDangerTime(false);
    dispatch(setIsAnswerSelected(false));
  }, [isStartTimer]);

  useEffect(() => {
    if (time !== 0) {
      if (time < 10) {
        setIsDangerTime(true);
      }
      if (!isAnswerSelected) {
        const intervalId = setInterval(() => {
          setTime(time - 1);
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
      }
    } else if (time === 0) {
      if (!isAnswerSelected) {
        setTimeout(() => {
          endGame(navigate, dispatch, isNewGame, isStartTimer);
        }, 1500);
      }
    }
  }, [time]);

  return (
    <TimerContainer>
      TIMER
      <Time isDangerTime={isDangerTime}>{time}</Time>
    </TimerContainer>
  );
}

export default Timer;
