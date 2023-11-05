import { Container, HelpItem } from "./CssHelpContainer";
import Swal from "sweetalert2";
import "./helpAlert.css";
import QuestionsAnswers from "../../interfaces/QuestionsAnswersInterface";
import { useState } from "react";

function HelpContainer(questionToPlay: QuestionsAnswers) {
const [isCallHome, setIsCallHome] = useState<boolean>(false);
const [isAskPublic, setIsAskPublic] = useState<boolean>(false);
const [is5050, setIs5050] = useState<boolean>(false);



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
    });
  }

  return (
    <Container>
      <HelpItem onClick={() => !isCallHome ? callHome() : null} isUsed={isCallHome}>
        <i className="fa-sharp fa-solid fa-phone-volume"></i>
      </HelpItem>
      <HelpItem isUsed={isAskPublic}>
        <i
          className="fa-sharp fa-solid fa-star-half-stroke"
          
        ></i>
        <span>50 : 50</span>
      </HelpItem>
      <HelpItem isUsed={is5050}>
        <i className="fa-sharp fa-solid fa-people-group"></i>
      </HelpItem>
    </Container>
  );
}

export default HelpContainer;
