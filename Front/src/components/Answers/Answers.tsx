import { useEffect, useState } from "react";
import AnswersPropsInterface from "../../interfaces/AnswersPropsInterface";

import { randomize } from "../../outils/randomItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnswerItem from "./AnswerItem";
import { AnswerItemI } from "../../interfaces/AnswerItemInterface";

function Answers({ goodAnswer, badAnswers }: AnswersPropsInterface) {
  const [AnswerItems, setAnswerItems] = useState<AnswerItemI[]>([]);

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

  return (
    <div
      className="row col-12 d-flex justify-content-center m-0"
      style={{ height: "fit-content" }}
    >
      <AnswerItem letter={"A"} answer={AnswerItems[0]} />
      <AnswerItem letter={"B"} answer={AnswerItems[1]} />
      <AnswerItem letter={"C"} answer={AnswerItems[2]} />
      <AnswerItem letter={"D"} answer={AnswerItems[3]} />
    </div>
  );
}

export default Answers;
