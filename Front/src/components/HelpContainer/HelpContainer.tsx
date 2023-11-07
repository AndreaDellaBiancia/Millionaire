import { Container, HelpItem } from "./CssHelpContainer";
import Swal from "sweetalert2";
import "./helpAlert.css";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setIsAskPublic, setIsCallHome, setIsHalfPossibility } from "../../store/helpReducer";
import { useEffect } from "react";

function HelpContainer(questionToPlay: QuestionsAnswers) {
  
  const isCallHome = useSelector(
    (state: RootState) => state.help.isCallHome
  );
  const isHalfPossibility = useSelector(
    (state: RootState) => state.help.isHalfPossibility
  );
  const isAskPublic = useSelector((state: RootState) => state.help.isAskPublic);
  const answerItems = useSelector(
    (state: RootState) => state.help.answerElements
  );
  const dispatch = useDispatch();

  function callHome() {
    dispatch(setIsCallHome(true));
    Swal.fire({
      title: questionToPlay.homeHelp?.description,
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

  useEffect(() => {
    if (isAskPublic) {
      // Si l'indice 50 : 50 "isAskPublic" est vrai, on affiche une boîte de dialogue avec l'aide du public.
      const answerA =
        answerItems[0]?.title !== ""
          ? `${answerItems[0]?.title} : ${answerItems[0]?.publicHelp}%<br><br>`
          : "";
      const answerB =
        answerItems[1]?.title !== ""
          ? `${answerItems[1]?.title} : ${answerItems[1]?.publicHelp}%<br><br>`
          : "";
      const answerC =
        answerItems[2]?.title !== ""
          ? `${answerItems[2]?.title} : ${answerItems[2]?.publicHelp}%<br><br>`
          : "";
      const answerD =
        answerItems[3]?.title !== ""
          ? `${answerItems[3]?.title} : ${answerItems[3]?.publicHelp}%<br><br>`
          : "";

      Swal.fire({
        title: "AIDE DU PUBLIC",
        html: `${answerA} ${answerB} ${answerC} ${answerD}`,
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
    <Container>
      <HelpItem
        onClick={() => (!isCallHome ? callHome() : null)}
        isUsed={isCallHome}
      >
        <i className="fa-sharp fa-solid fa-phone-volume"></i>
      </HelpItem>
      <HelpItem
        onClick={() => dispatch(setIsHalfPossibility(true))}
        isUsed={isHalfPossibility}
      >
        <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
        <span>50 : 50</span>
      </HelpItem>
      <HelpItem
        onClick={() => dispatch(setIsAskPublic(true))}
        isUsed={isAskPublic}
      >
        <i className="fa-sharp fa-solid fa-people-group"></i>
      </HelpItem>
    </Container>
  );
}

export default HelpContainer;
