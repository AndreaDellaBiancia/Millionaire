import { useEffect, useState } from "react";
import AnswersPropsInterface from "../../interfaces/AnswersPropsInterface";
import { randomize } from "../../outils/randomItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnswerItem from "./AnswerItem";
import { AnswerItemI } from "../../interfaces/AnswerItemInterface";
import { setIsStartTimer } from "../../store/gameReducer";
import { setAnswerElements } from "../../store/helpReducer";

function Answers({ goodAnswer, badAnswers }: AnswersPropsInterface) {
  const [answerItems, setAnswerItems] = useState<(AnswerItemI | undefined)[]>(
    []
  );
  const isHalfPossibility = useSelector(
    (state: RootState) => state.help.isHalfPossibility
  );
  const isStartTimer = useSelector(
    (state: RootState) => state.game.isStartTimer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let answers: AnswerItemI[] = [];

    // Si goodAnswer et badAnswers sont définis, on prépare un tableau de réponses pour les afficher.
    if (goodAnswer && badAnswers) {
      answers.push({
        title: goodAnswer.title,
        isTrue: true,
        publicHelp: goodAnswer.help_percentage,
      });
      badAnswers.forEach((answer) => {
        answers.push({
          title: answer.title,
          isTrue: false,
          publicHelp: answer.help_percentage,
        });
      });
    }
    dispatch(setIsStartTimer(!isStartTimer));
    // On mélangez les réponses.
    setAnswerItems(randomize(answers));
  }, [goodAnswer, badAnswers]);

  useEffect(() => {
    if (isHalfPossibility) {
      let itemsDeleted = 0;
      // Si l'aide "isHalfPossibility" est vrai, on supprime 2 réponses incorrectes.
      const triedAnswers = answerItems?.map((item) => {
        if (item?.isTrue) {
          return item;
        } else if (!item?.isTrue && itemsDeleted < 2) {
          itemsDeleted++;
          return { title: "", isTrue: false };
        } else {
          itemsDeleted++;
          return item;
        }
      });
      if (triedAnswers) {
        setAnswerItems(triedAnswers);
      }
    }
  }, [isHalfPossibility]);

  useEffect(() => {
    //Quand les reponses sont chargées, on les stock egalment dans redux pour pouvoir utiliser l'aide du public
    dispatch(setAnswerElements(answerItems));
  }, [answerItems]);

  return (
    <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
      <AnswerItem letter={"A"} answer={answerItems[0]} />
      <AnswerItem letter={"B"} answer={answerItems[1]} />
      <AnswerItem letter={"C"} answer={answerItems[2]} />
      <AnswerItem letter={"D"} answer={answerItems[3]} />
    </div>
  );
}

export default Answers;
