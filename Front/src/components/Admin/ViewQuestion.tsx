import Modal from "react-bootstrap/Modal";

function ViewQuestion(props: any) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>titre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        question id {props.questionId}
      </Modal.Body>
    </Modal>
  );
}

export default ViewQuestion;
