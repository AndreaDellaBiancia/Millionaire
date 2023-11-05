import { useDispatch, useSelector } from "react-redux";
import { AnswerItemProps } from "../../interfaces/AnswerItemInterface";
import {
  AnswerContainer,
  Line,
  TriangleLeft,
  TriangleLeft2,
  TriangleRight,
  TriangleRight2,
} from "./CssAnswers";
import {
  setChoosedAnswer,
  setIsAnswerSelected,
  setIsGoodAnswer,
} from "../../store/gameReducer";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { setPointsQuestion } from "../../store/awardsReducer";

function AnswerItem({ letter, answer }: AnswerItemProps) {
  const [color, setColor] = useState("white");
  const [indexPoints, setIndexPoints] = useState<number>(0);
  const questionNb = useSelector((state: RootState) => state.game.questionNb);
  const level = useSelector((state: RootState) => state.game.level);
  const pointsGame = useSelector((state: RootState) => state.awards.pointsGame);

  

  useEffect(() => {
    if (level === "easy") {
      setIndexPoints(5);
    } else if (level === "medium") {
      setIndexPoints(10);
    } else {
      setIndexPoints(15);
    }
  }, [])

  const dispatch = useDispatch();
  const choosedAnswer = useSelector(
    (state: RootState) => state.game.choosedAnswer
  );

  const isAnswerSelected = useSelector(
    (state: RootState) => state.game.isAnswerSelected
  );
  let isWaiting = true;
  function toggleColorWaiting() {
    if (isWaiting) {
      setColor("yellow");
    } else {
      setColor("white");
    }
    isWaiting = !isWaiting;
  }

  let isGood = true;
  function toggleColorIsGood() {
    if (isGood) {
      setColor("rgb(17, 224, 17)");
    } else {
      setColor("white");
    }
    isGood = !isGood;
  }
  function selectAnswer() {
    dispatch(setIsAnswerSelected(true));
    if (!isAnswerSelected) {
      const intervalIdWait = setInterval(toggleColorWaiting, 500);
      setTimeout(() => {
        dispatch(setChoosedAnswer(answer));
        if (answer?.isTrue === true) {
          const intervalIdGood = setInterval(toggleColorIsGood, 150);
          dispatch(setPointsQuestion(pointsGame + (questionNb + 1) * indexPoints));
          setTimeout(() => {
            clearInterval(intervalIdGood);
            dispatch(setIsGoodAnswer(true));
          }, 2000);
        } else {
          setColor("red");
        }
        clearInterval(intervalIdWait);
      }, 2500);
    }
  }

  useEffect(() => {
    setColor("white");
    dispatch(setIsAnswerSelected(false));
    dispatch(setIsGoodAnswer(false));
  }, [letter, answer]);

  useEffect(() => {
    if (choosedAnswer && answer) {
      if (answer.isTrue) {
        const intervalIdGood = setInterval(toggleColorIsGood, 150);
        setTimeout(() => {
          clearInterval(intervalIdGood);
        }, 2000);
      }
    }
  }, [choosedAnswer]);

  return (
    <AnswerContainer
      color={color}
      onClick={() => {
        if (answer?.title === "") {
          return null;
        }else{
          if (!isAnswerSelected) {
            selectAnswer();
          }
        }
       
      }}
    >
      <TriangleLeft color={color}></TriangleLeft>
      <TriangleLeft2 color={color}></TriangleLeft2>
      <div style={{ position: "absolute" }}>{letter} :</div>{" "}
      <p>{answer?.title}</p>
      <Line></Line>
      <TriangleRight color={color}></TriangleRight>
      <TriangleRight2 color={color}></TriangleRight2>
    </AnswerContainer>
  );
}

export default AnswerItem;
