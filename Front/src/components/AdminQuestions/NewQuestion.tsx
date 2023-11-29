import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import "./style.css";
import { questionAwardNormalize } from "../../outils/gameNormalize";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ModalQuestionToHandleProps from "../../interfaces/ModalQuestionToHandleProps";
import { createQuestion } from "../../fetch/fetcAdminCreateQuestion";

function NewQuestion({
  show,
  setModalShow,
  onHide,
}: ModalQuestionToHandleProps) {
  const [question, setQuestion] = useState<any>();
  const [goodAnswer, setGoodAnswer] = useState<any>();
  const [badAnswer1, setBadnswer1] = useState<any>();
  const [badAnswer2, setBadnswer2] = useState<any>();
  const [badAnswer3, setBadnswer3] = useState<any>();
  const [homeHelp, setHomeHelp] = useState<any>();

  const [questionError, setQuestionError] = useState<boolean>(false);
  const [goodAnswerTitleError, setGoodAnswerTitleError] =
    useState<boolean>(false);
  const [goodAnswerHelpError, setGoodAnswerHelpError] =
    useState<boolean>(false);
  const [badAnswerTitleError, setbadAnswerTitleError] =
    useState<boolean>(false);
  const [badAnswerHelpError, setBadAnswerHelpError] = useState<boolean>(false);
  const [homeHelpError, setHomeHelpError] = useState<boolean>(false);
  const [isPercentagesSumError, setIsPercentagesSumError] =
    useState<boolean>(false);

  const awards = useSelector((state: RootState) => state.awards.awards);
  const roleCurrentUser = useSelector(
    (state: RootState) => state.user.user?.role?.name
  );

  // Met à jour les états à 0
  useEffect(() => {
    setQuestion({ title: "", award: 1, levelDifficulty: 1 });
    setGoodAnswer({ title: "", help_percentage: null });
    setBadnswer1({ title: "", help_percentage: null });
    setBadnswer2({ title: "", help_percentage: null });
    setBadnswer3({ title: "", help_percentage: null });
    setHomeHelp({ description: "" });

    if (show) {
      setQuestionError(false);
      setGoodAnswerTitleError(false);
      setGoodAnswerHelpError(false);
      setbadAnswerTitleError(false);
      setBadAnswerHelpError(false);
      setIsPercentagesSumError(false);
      setHomeHelpError(false);
    }
  }, [show]);

  // Fonction de gestion de la mise à jour de la question
  async function handleCreateQuestion() {
    const onlyNumbersRegex = /^\d+/;

    // Validation des champs obligatoires
    const isQuetionTitle = question.title
      ? (setQuestionError(false), true)
      : (setQuestionError(true), false);
    const isHomeHelp = homeHelp.description
      ? (setHomeHelpError(false), true)
      : (setHomeHelpError(true), false);
    const isGoodAnswerTitle = goodAnswer.title
      ? (setGoodAnswerTitleError(false), true)
      : (setGoodAnswerTitleError(true), false);
    const isGoodAnswerHelp = onlyNumbersRegex.test(goodAnswer.help_percentage)
      ? (setGoodAnswerHelpError(false), true)
      : (setGoodAnswerHelpError(true), false);

    // Validation des réponses incorrectes
    const isBadAnswer1Title = badAnswer1.title ? true : false;
    const isBadAnswer1Help = onlyNumbersRegex.test(badAnswer1.help_percentage)
      ? true
      : false;

    const isBadAnswer2Title = badAnswer2.title ? true : false;
    const isBadAnswer2Help = onlyNumbersRegex.test(badAnswer2.help_percentage)
      ? true
      : false;

    const isBadAnswer3Title = badAnswer3.title ? true : false;
    const isBadAnswer3Help = onlyNumbersRegex.test(badAnswer3.help_percentage)
      ? true
      : false;

    // Validation des réponses incorrectes (titres)
    let isBadAnswersTitlesOk = false;
    if (isBadAnswer1Title && isBadAnswer2Title && isBadAnswer3Title) {
      setbadAnswerTitleError(false);
      isBadAnswersTitlesOk = true;
    } else {
      setbadAnswerTitleError(true);
    }

    // Validation des réponses incorrectes (pourcentages)
    if (isBadAnswer1Help && isBadAnswer2Help && isBadAnswer3Help) {
      setBadAnswerHelpError(false);
    } else {
      setBadAnswerHelpError(true);
    }

    // Validation de la somme des pourcentages
    let isPercentagesSumOk = false;
    if (
      isBadAnswer1Help &&
      isBadAnswer2Help &&
      isBadAnswer3Help &&
      isGoodAnswerHelp
    ) {
      if (
        Number(goodAnswer.help_percentage) +
          Number(badAnswer1.help_percentage) +
          Number(badAnswer2.help_percentage) +
          Number(badAnswer3.help_percentage) ===
        100
      ) {
        setIsPercentagesSumError(false);
        isPercentagesSumOk = true;
      } else {
        setIsPercentagesSumError(true);
      }
    }

    // Si toutes les validations sont réussies, tente la mise à jour de la question
    if (
      isQuetionTitle &&
      isHomeHelp &&
      isGoodAnswerTitle &&
      isBadAnswersTitlesOk &&
      isPercentagesSumOk
    ) {
      // On execute l'action seulement si on est SUPER_ADMIN
      if (roleCurrentUser === "SUPER_ADMIN") {
        try {
          await createQuestion(
            question,
            goodAnswer,
            badAnswer1,
            badAnswer2,
            badAnswer3,
            homeHelp
          );

          // Affiche un message de succès
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Question créée !",
            showConfirmButton: false,
            timer: 2000,
          });

          // Ferme la fenêtre modale
          setModalShow(false);
        } catch (error: any) {
          Swal.fire({
            title: "Erreur pendant la création.",
            icon: "error",
          });
        }
      }else{
        Swal.fire({
          title: "Opération non autorisée.",
          text: "Seuls les super admins peuvent créer une question.",
          icon: "error",
        });
      }
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
          <div className="modal-title__question">
            <label
              style={{
                width: "100%",
                display: "flex",
                fontWeight: "normal",
                fontSize: "1.2rem",
              }}
            >
              QUESTION :
            </label>
            <textarea
              style={{ width: "100%" }}
              value={question?.title}
              onChange={(e) =>
                setQuestion({ ...question, title: e.target.value })
              }
            ></textarea>
          </div>
          <div className="select-award-container">
            <label style={{ fontSize: "1.2rem" }}>GAIN :</label>
            <select
              className="select-award"
              onChange={(e) =>
                setQuestion({ ...question, award: Number(e.target.value) })
              }
            >
              {awards.map((award: number, index: number) => (
                <option className="option__award" key={award} value={index + 1}>
                  {questionAwardNormalize(index + 1)} €
                </option>
              ))}
            </select>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {questionError && (
          <span className="error-handle-question">Renseigner une question</span>
        )}

        <div className="level_container_update">
          NIVEAU :
          <select
            className="select-level"
            onChange={(e) =>
              setQuestion({
                ...question,
                levelDifficulty: Number(e.target.value),
              })
            }
          >
            <option value={1}>FACILE</option>
            <option value={2}>DIFFICILE</option>
          </select>
        </div>
        <div className="answers_container">
          <div className="good-answer">
            <div>
              <p>BONNE RÉPONSE</p>
              <input
                className="good-answer_title"
                value={goodAnswer?.title}
                onChange={(e) =>
                  setGoodAnswer({ ...goodAnswer, title: e.target.value })
                }
              />
              {goodAnswerTitleError && (
                <span className="error-handle-question">
                  Renseigner une réponse
                </span>
              )}
            </div>
            <div>
              <p>AIDE DU PUBLIC %</p>
              <input
                className="good-answer_help"
                value={goodAnswer?.help_percentage}
                onChange={(e) =>
                  setGoodAnswer({
                    ...goodAnswer,
                    help_percentage: e.target.value,
                  })
                }
              />
              {goodAnswerHelpError && (
                <span className="error-handle-question">
                  Renseigner un pourcentage
                </span>
              )}
            </div>
          </div>
          <div className="bad-answers">
            <div>
              <p>MAUVAISES RÉPONSES</p>

              <input
                className="bad-answer_title"
                value={badAnswer1?.title}
                onChange={(e) =>
                  setBadnswer1({
                    ...badAnswer1,
                    title: e.target.value,
                  })
                }
              ></input>
              <input
                className="bad-answer_title"
                value={badAnswer2?.title}
                onChange={(e) =>
                  setBadnswer2({
                    ...badAnswer2,
                    title: e.target.value,
                  })
                }
              ></input>
              <input
                className="bad-answer_title"
                value={badAnswer3?.title}
                onChange={(e) =>
                  setBadnswer3({
                    ...badAnswer3,
                    title: e.target.value,
                  })
                }
              ></input>
              {badAnswerTitleError && (
                <span className="error-handle-question">
                  Renseigner des réponses
                </span>
              )}
            </div>
            <div>
              <p>AIDE DU PUBLIC %</p>
              <input
                className="bad-answer_help"
                value={badAnswer1?.help_percentage}
                onChange={(e) =>
                  setBadnswer1({
                    ...badAnswer1,
                    help_percentage: e.target.value,
                  })
                }
              />

              <input
                className="bad-answer_help"
                value={badAnswer2?.help_percentage}
                onChange={(e) =>
                  setBadnswer2({
                    ...badAnswer2,
                    help_percentage: e.target.value,
                  })
                }
              />
              <input
                className="bad-answer_help"
                value={badAnswer3?.help_percentage}
                onChange={(e) =>
                  setBadnswer3({
                    ...badAnswer3,
                    help_percentage: e.target.value,
                  })
                }
              />
              {badAnswerHelpError && (
                <span className="error-handle-question">
                  Renseigner des pourcentages
                </span>
              )}
            </div>
          </div>
        </div>
        {isPercentagesSumError && (
          <div className="error-sum-percentages">
            <span className="error-handle-question">
              La somme des pourcentages doit être égale à 100
            </span>
          </div>
        )}
        <div className="home_help">
          AIDE TÉLÉPHONE :{" "}
          <input
            value={homeHelp?.description}
            onChange={(e) =>
              setHomeHelp({ ...homeHelp, description: e.target.value })
            }
          />
          {homeHelpError && (
            <span className="error-handle-question">Renseigner une aide</span>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-outline-success btn-lg"
          onClick={() => handleCreateQuestion()}
        >
          Ajouter
        </button>
        <button
          className="btn btn-outline-dark btn-lg"
          onClick={() => setModalShow(false)}
        >
          Annuler
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewQuestion;
