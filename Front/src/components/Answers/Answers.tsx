import { useEffect, useState } from "react";
import AnswersPropsInterface from "../../interfaces/AnswersPropsInterface";

import { randomize } from "../../outils/randomItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnswerItem from "./AnswerItem";
import { AnswerItemI } from "../../interfaces/AnswerItemInterface";

function Answers({ goodAnswer, badAnswers }: AnswersPropsInterface) {
  const [answerItems, setAnswerItems] = useState<(AnswerItemI | undefined)[]>([]);
  const isHalfPossibility = useSelector(
    (state: RootState) => state.game.isHalfPossibility
  );

  useEffect(() => {
    let answers: AnswerItemI[] = [];

    if (goodAnswer && badAnswers) {
      answers.push({ title: goodAnswer.title, isTrue: true });
      badAnswers.forEach((answer) => {
        answers.push({ title: answer.title, isTrue: false });
      });
    }

    setAnswerItems(randomize(answers));
  }, [goodAnswer, badAnswers]);

  useEffect(() => {
    if (isHalfPossibility) {
      let itemsDeleted = 0;
      const triedAnswers = answerItems?.map((item) => {
        if (item?.isTrue) {
          return item;
        } else if (!item?.isTrue && itemsDeleted  < 2 ) {
          itemsDeleted++;
          return {"title": "", isTrue: false}
        }else{
          itemsDeleted++;
          return item;
        }
      });
      if (triedAnswers) {
        setAnswerItems(triedAnswers)
      }
     
    }
  }, [isHalfPossibility]);

  console.log("====================================");
  console.log(answerItems);
  console.log("====================================");

  return (
    <div
      className="row col-12 d-flex justify-content-center m-0"
      style={{ height: "fit-content" }}
    >
      <AnswerItem letter={"A"} answer={answerItems[0]} />
      <AnswerItem letter={"B"} answer={answerItems[1]} />
      <AnswerItem letter={"C"} answer={answerItems[2]} />
      <AnswerItem letter={"D"} answer={answerItems[3]} />
    </div>
  );
}

export default Answers;
