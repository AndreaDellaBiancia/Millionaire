import Modal from "react-bootstrap/Modal";
import "./style.css";
import { questionAwardNormalize } from "../../outils/gameNormalize";
import BadAnsw from "../../interfaces/BadAnswInterface";

function ViewQuestion(props: any) {
  console.log(props.questionToView);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="modal-title__question">
            {props.questionToView?.question?.title}
          </p>{" "}
          <p className="modal-title__award">
            {questionAwardNormalize(props.questionToView?.question.award)} €
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="answers_container">
          <div className="good-answer">
            <div>
              <p>BONNE REPONSE</p> <p>{props.questionToView?.goodAnswer.title}</p>
            </div>
            <div>
              <p>AIDE DU PUBLIC</p>{" "}
              <p>{props.questionToView?.goodAnswer.help_percentage} %</p>
            </div>
          </div>
          <div className="bad-answers">
            <div>
              <p>MAUVAISES REPONSES</p>{" "}
              {props.questionToView?.badAnswers.map((answer: BadAnsw) => (
                <p>{answer.title}</p>
              ))}
            </div>
            <div>
              <p>AIDE DU PUBLIC</p>{" "}
              {props.questionToView?.badAnswers.map((answer: BadAnsw) => (
                <p>{answer.help_percentage} %</p>
              ))}
            </div>
          </div>
        </div>
        <p className="home_help">AIDE TELEPHONE : {props.questionToView?.homeHelp.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button>Modifier</button>  <button>Supprimer</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewQuestion;
