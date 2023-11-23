import Modal from "react-bootstrap/Modal";
import "./style.css";
import {
  levelNormalize,
  questionAwardNormalize,
} from "../../outils/gameNormalize";
import BadAnsw from "../../interfaces/BadAnswInterface";
import ModalQuestionToHandleProps from "../../interfaces/ModalQuestionToHandleProps";
import { deleteQuestionModal } from "../../outils/deleteQuestion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function ViewQuestion({
  questionToHandle,
  show,
  setModalShow,
  onHide,
  setModalUpdateShow,
  setIsDeleteQuestion,
  isDeleteQuestion,
}: ModalQuestionToHandleProps) {

  const roleCurrentUser = useSelector(
    (state: RootState) => state.user.user?.role?.name
  );

  function handleUpdate() {
    if (setModalUpdateShow) {
      setModalUpdateShow(true);
      onHide();
    }
  }

  // Fonction pour gérer la suppression d'une question
  function handleDelete(
    questionId: number | undefined,
    questionTitle: string | undefined
  ) {
    if (setIsDeleteQuestion && isDeleteQuestion !== undefined) {
      // Appelle la fonction pour confirmer la suppression de la question
      deleteQuestionModal(
        questionId,
        questionTitle,
        setIsDeleteQuestion,
        isDeleteQuestion,
        roleCurrentUser
      );
      onHide();
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="modal-title__question">
            {questionToHandle?.question?.title}
          </p>{" "}
          <p className="modal-title__award">
            {questionAwardNormalize(questionToHandle?.question.award ?? 0)} €
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="level">
          NIVEAU :{" "}
          <span>
            {levelNormalize(
              questionToHandle?.question.levelDifficulty?.level ?? ""
            )}
          </span>
        </p>
        <div className="answers_container">
          <div className="good-answer">
            <div>
              <p>BONNE REPONSE</p> <p>{questionToHandle?.goodAnswer.title}</p>
            </div>
            <div>
              <p>AIDE DU PUBLIC</p>{" "}
              <p>{questionToHandle?.goodAnswer.help_percentage} %</p>
            </div>
          </div>
          <div className="bad-answers">
            <div>
              <p>MAUVAISES REPONSES</p>{" "}
              {questionToHandle?.badAnswers.map((answer: BadAnsw) => (
                <p key={answer.id}>{answer.title}</p>
              ))}
            </div>
            <div>
              <p>AIDE DU PUBLIC</p>{" "}
              {questionToHandle?.badAnswers.map((answer: BadAnsw) => (
                <p key={answer.id}>{answer.help_percentage} %</p>
              ))}
            </div>
          </div>
        </div>
        <p className="home_help">
          AIDE TELEPHONE : {questionToHandle?.homeHelp.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => handleUpdate()}
        >
          Modifier
        </button>
        <button
          className="btn btn-outline-dark btn-lg"
          onClick={() => setModalShow(false)}
        >
          Annuler
        </button>
        <button
          className="btn btn-outline-danger btn-lg"
          onClick={() =>
            handleDelete(
              questionToHandle?.question.id,
              questionToHandle?.question.title
            )
          }
        >
          Supprimer
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewQuestion;
