import { useDispatch, useSelector } from "react-redux";
import { AnswerItemProps } from "../../interfaces/AnswerItemInterface";
import {
  AnswerContainer,
  Container,
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
  setIsShowPopupRegister,
} from "../../store/gameReducer";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { setIsMillion, setPointsQuestion } from "../../store/awardsReducer";
import { endGame } from "../../outils/endGame";
import { useNavigate } from "react-router-dom";
import { popupIsAlredyRegistered } from "../../outils/popupIsAlredyRegistered";

function AnswerItem({ letter, answer }: AnswerItemProps) {
  const [color, setColor] = useState("white");
  const [indexPoints, setIndexPoints] = useState<number>(0);
  const questionNb = useSelector((state: RootState) => state.game.questionNb);
  const level = useSelector((state: RootState) => state.game.level);
  const pointsGame = useSelector((state: RootState) => state.awards.pointsGame);
  const user = useSelector((state: RootState) => state.user.user);

  const isStartTimer = useSelector(
    (state: RootState) => state.game.isStartTimer
  );
  const isNewGame = useSelector((state: RootState) => state.game.isNewGame);
  const choosedAnswer = useSelector(
    (state: RootState) => state.game.choosedAnswer
  );

  const isAnswerSelected = useSelector(
    (state: RootState) => state.game.isAnswerSelected
  );

  const isAskPublic = useSelector(
    (state: RootState) => state.help.isAskPublic
  );

  const isCallHome = useSelector(
    (state: RootState) => state.help.isCallHome
  );

  const isHalfPossibility = useSelector(
    (state: RootState) =>  state.help.isHalfPossibility
  );

  const isShowPopupRegister = useSelector(
    (state: RootState) =>  state.game.isShowPopupRegister
  );

  const token = useSelector(
    (state: RootState) =>  state.user.token
  );  


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //Selon le niveau choisi on augmente les points pour chaque bonne réponse
    if (level === "easy") {
      setIndexPoints(5);
    } else if (level === "medium") {
      setIndexPoints(10);
    } else {
      setIndexPoints(15);
    }
  }, []);

  //Clignottement reponse cliquée.
  let isWaiting = true;
  function toggleColorWaiting() {
    if (isWaiting) {
      setColor("yellow");
    } else {
      setColor("white");
    }
    isWaiting = !isWaiting;
  }

  //Clignottement bonne reponse.
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
    // Définir l'état "isAnswerSelected" sur true.
    dispatch(setIsAnswerSelected(true));
    // Vérifier si une réponse n'a pas déjà été sélectionnée.
    if (!isAnswerSelected) {
      // Mettre en place un intervalle pour basculer la couleur en attente "jaune".
      const intervalIdWait = setInterval(toggleColorWaiting, 500);
      // Après un délai de 2,5 secondes, effectuer les actions suivantes.
      setTimeout(() => {
        // Définir la réponse choisie.
        dispatch(setChoosedAnswer(answer));
        // Si la réponse est correcte (isTrue === true).
        if (answer?.isTrue === true) {
          // Mettre en place un intervalle pour basculer la couleur en "verte".
          const intervalIdGood = setInterval(toggleColorIsGood, 150);
          // Mettre à jour les points de jeu en ajoutant un certain nombre de points.
          dispatch(
            setPointsQuestion(pointsGame + (questionNb + 1) * indexPoints)
          );
          // Si c'est la dernière question, déclencher la victoire et démander de réinitialiser le jeu.
          if (questionNb === 14) {
            dispatch(setIsMillion(true));
            setTimeout(() => {
              const finalsPoints = pointsGame + (15 * indexPoints);
              const lastQuestionNb = 15;
              dispatch(setIsMillion(false));
              endGame(navigate, dispatch, isNewGame, isStartTimer, "win", finalsPoints, lastQuestionNb, level, user, isAskPublic, isCallHome, isHalfPossibility);
            }, 8000)
          }
          // Après 2 secondes, arrêter l'intervalle "bonne répnse(verte)" et définir "isGoodAnswer" sur true.
          setTimeout(() => {
            clearInterval(intervalIdGood);
            dispatch(setIsGoodAnswer(true));
          }, 2000);

          // Si la popup de rappel  d'inscription n'est pas encore affichée et l'utilisateur n'est pas connecté, afficher la popup.
          if (!isShowPopupRegister && !token) {
            popupIsAlredyRegistered();
            dispatch(setIsShowPopupRegister(true))
          }
          
        } else {
          // Si la réponse est incorrecte, définir la couleur sur "rouge".
          setTimeout(() => {
            endGame(navigate, dispatch, isNewGame, isStartTimer, "lost", pointsGame, questionNb, level, user,  isAskPublic, isCallHome, isHalfPossibility);
          }, 2000);
          setColor("red");
        }
        // Arrêter l'intervalle "en attente".
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
    //Si la reponse choisie est la mauvaise on affiche egalmentla bonne
    if (choosedAnswer && answer) {
      if (answer.isTrue) {
        // Active un intervalle pour basculer la couleur pour une réponse correcte
        const intervalIdGood = setInterval(toggleColorIsGood, 150);
        setTimeout(() => {
          // Arrête l'intervalle après 2 secondes
          clearInterval(intervalIdGood);
        }, 2000);
      }
    }
  }, [choosedAnswer]);

  return (
    <Container>
      <Line></Line>
    <AnswerContainer
      color={color}
      onClick={() => {
        if (answer?.title === "") {
          return null;
        } else {
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
      
      <TriangleRight color={color}></TriangleRight>
      <TriangleRight2 color={color}></TriangleRight2>
    </AnswerContainer>
    </Container>
  );
}

export default AnswerItem;
