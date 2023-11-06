import { useEffect, useState } from "react";
import AnswersPropsInterface from "../../interfaces/AnswersPropsInterface";

import { randomize } from "../../outils/randomItems";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import AnswerItem from "./AnswerItem";
import { AnswerItemI } from "../../interfaces/AnswerItemInterface";
import Swal from "sweetalert2";

function Answers({ goodAnswer, badAnswers }: AnswersPropsInterface) {
  const [answerItems, setAnswerItems] = useState<(AnswerItemI | undefined)[]>(
    []
  );
  const isHalfPossibility = useSelector(
    (state: RootState) => state.game.isHalfPossibility
  );

  const isAskPublic = useSelector((state: RootState) => state.game.isAskPublic);

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
    if (isAskPublic) {
      // Si l'indice 50 : 50 "isAskPublic" est vrai, on affiche une boîte de dialogue avec l'aide du public.
      const answerA = answerItems[0]?.title !== "" ? `${answerItems[0]?.title} : ${answerItems[0]?.publicHelp}%<br><br>`: "";
      const answerB = answerItems[1]?.title !== "" ? `${answerItems[1]?.title} : ${answerItems[1]?.publicHelp}%<br><br>`: "";
      const answerC = answerItems[2]?.title !== "" ? `${answerItems[2]?.title} : ${answerItems[2]?.publicHelp}%<br><br>`: "";
      const answerD = answerItems[3]?.title !== "" ? `${answerItems[3]?.title} : ${answerItems[3]?.publicHelp}%<br><br>`: "";
  
      Swal.fire({
        title: "AIDE DU PUBLIC",
        html:  `${answerA} ${answerB} ${answerC} ${answerD}`,
        timer: 10000,
        timerProgressBar: true,
        customClass: {
          timerProgressBar: "timerProgressBar",
          popup: "container-alert",
          title: "title-alert",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  }, [isAskPublic]);
  

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
