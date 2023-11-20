import { useEffect, useState } from "react";
import {
  AdminContainer,
  ColItem,
  ColTitle,
  Line,
  LineTitle,
  ListContainer,
  Table,
  Title,
} from "./CssAdmin";
import Question from "../../interfaces/QuestionInterface";
import { getAdminQuestions } from "../../fetch/fetchAdminQuestions";
import {
  levelNormalize,
  questionAwardNormalize,
} from "../../outils/gameNormalize";
import ViewQuestion from "../../components/Admin/ViewQuestion";
import { getQuestionById } from "../../fetch/fetchQuestionById";
import UpdateQuestion from "../../components/Admin/UpdateQuestion";
import QuestionToHandle from "../../interfaces/QuestionToHandle";

function Admin() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [modalViewShow, setModalViewShow] = useState<boolean>(false);
  const [modalUpdateShow, setModalUpdateShow] = useState<boolean>(false);
  const [questionToHandle, setQuestionToHandle] = useState<QuestionToHandle>();

  useEffect(() => {
    async function getQuestionData() {
      const questionsData = await getAdminQuestions();
      setQuestions(questionsData);
    }

    getQuestionData();
  }, [modalUpdateShow]);

  function handleViewQuestion(idQuestion: number) {
    async function getQuestionDatas() {
      const datas = await getQuestionById(idQuestion);
      setQuestionToHandle(datas);
      setModalViewShow(true);
    }
    getQuestionDatas();
  }

  function handleUpdateQuestion(idQuestion: number) {
    async function getQuestionDatas() {
      const datas = await getQuestionById(idQuestion);
      setQuestionToHandle(datas);
      setModalUpdateShow(true);
    }
    getQuestionDatas();
  }

  function handleDeleteQuestion(idQuestion: number){
   
  }

  return (
    <AdminContainer>
      <Title>Administration</Title>
      <ViewQuestion
        show={modalViewShow}
        setModalShow={setModalViewShow}
        onHide={() => setModalViewShow(false)}
        questionToHandle={questionToHandle}
        setModalUpdateShow={setModalUpdateShow}
      />
      <UpdateQuestion
        show={modalUpdateShow}
        setModalShow={setModalUpdateShow}
        onHide={() => setModalUpdateShow(false)}
        questionToHandle={questionToHandle}
      />
      <Table>
        <LineTitle className="title-line">
          <ColTitle className="col-admin-award">Prix</ColTitle>
          <ColTitle className="col-admin-question">Question</ColTitle>
          <ColTitle className="col-admin-level">Niveau</ColTitle>
          <ColTitle className="col-admin-view"></ColTitle>
          <ColTitle className="col-admin-update"></ColTitle>
          <ColTitle className="col-admin-delete"></ColTitle>
        </LineTitle>
        <ListContainer>
          {questions.map((question) => (
            <Line key={question.id}>
              <ColItem className="col-admin-award">
                {questionAwardNormalize(question.award)} €
              </ColItem>
              <ColItem className="col-admin-question">{question.title}</ColItem>
              <ColItem className="col-admin-level">
                {levelNormalize(question.levelDifficulty.level)}
              </ColItem>
              <ColItem
                className="col-admin-view"
                onClick={() => handleViewQuestion(question.id)}
              >
                <i className="fa-regular fa-eye"></i>
              </ColItem>
              <ColItem
                className="col-admin-update"
                onClick={() => handleUpdateQuestion(question.id)}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </ColItem>
              <ColItem
                className="col-admin-delete"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </ColItem>
            </Line>
          ))}
        </ListContainer>
      </Table>
    </AdminContainer>
  );
}

export default Admin;
