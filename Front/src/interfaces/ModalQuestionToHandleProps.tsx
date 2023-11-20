import QuestionToHandle from "./QuestionToHandle";

interface ModalQuestionToHandleProps {
  questionToHandle?: QuestionToHandle | undefined,
  show: boolean,
  setModalShow : (value : boolean) => void,
  onHide: () => void,
  setModalUpdateShow? : (value : boolean) => void,
  setIsDeleteQuestion? : (value : boolean) => void,
  isDeleteQuestion? : boolean
}

export default ModalQuestionToHandleProps;
