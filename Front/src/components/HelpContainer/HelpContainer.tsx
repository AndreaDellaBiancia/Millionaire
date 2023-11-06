import { Container, HelpItem } from "./CssHelpContainer";
import Swal from "sweetalert2";
import "./helpAlert.css";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setIsAskPublic, setIsHalfPossibility } from "../../store/gameReducer";

function HelpContainer(questionToPlay: QuestionsAnswers) {
  const [isCallHome, setIsCallHome] = useState<boolean>(false);

  const isHalfPossibility = useSelector(
    (state: RootState) => state.game.isHalfPossibility
  );
  const isAskPublic = useSelector((state: RootState) => state.game.isAskPublic);

  const dispatch = useDispatch();

  function callHome() {
    setIsCallHome(true);
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
