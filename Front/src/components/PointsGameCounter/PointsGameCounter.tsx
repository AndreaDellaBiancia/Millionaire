import { useDispatch, useSelector } from "react-redux";
import { Points, PointsContainer } from "./CssPointsGameCounter";
import { RootState } from "../../store/store";
import { setPointsGame, setPointsQuestion } from "../../store/awardsReducer";
import { useEffect, useState } from "react";

function PointsGameCounter(points: { points: number }) {
  const [isPointsAdded, setIsPointsAdded] = useState<boolean>(false);
  const pointsQuestion = useSelector(
    (state: RootState) => state.awards.pointsQuestion
  );
  const pointsGame = useSelector((state: RootState) => state.awards.pointsGame);

  const dispatch = useDispatch();
  const incrementPointsGame = () => {
    if (pointsGame < pointsQuestion) {
      for (let index = pointsGame; index < pointsQuestion; index++) {
        dispatch(setPointsGame(pointsGame + 1));
      }
    } else {
      dispatch(setPointsQuestion(0));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      incrementPointsGame();
    }, 1);

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, [pointsQuestion, pointsGame]);

  useEffect(() => {
    if (pointsGame !== 0) {
      setIsPointsAdded(true);
      setTimeout(() => {
        setIsPointsAdded(false);
      }, 2000);
    }
  }, [pointsGame]);

  return (
    <PointsContainer>
      <Points isPointsAdded={isPointsAdded}>
        <p>POINTS</p> <p>{points.points}</p>
      </Points>
    </PointsContainer>
  );
}

export default PointsGameCounter;
