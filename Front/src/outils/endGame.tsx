import Swal from "sweetalert2";
import {
  setIsAnswerSelected,
  setIsNewGame,
  setIsStartTimer,
} from "../store/gameReducer";
import { setPointsGame } from "../store/awardsReducer";
import { setIsAskPublic, setIsHalfPossibility } from "../store/helpReducer";
import { saveGame } from "../fetch/fetchSaveGame";
import User from "../interfaces/UserInterface";

export function endGame(
  navigate: any,
  dispatch: any,
  isNewGame: boolean,
  isStartTimer: boolean,
  status: string,
  pointsGame: number,
  questionNb: number,
  level: string,
  user: User | null,
  isAskPublic : boolean, 
  isCallHome: boolean, 
  isHalfPossibility: boolean,
) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });
  swalWithBootstrapButtons
    .fire({
      title: status === "win" ? "Tu as gagné !!!" : "Tu as perdu ...",
      text: "Veux-tu demarrer une nouvelle partie?",
      icon: status === "win" ? "success" : "error",
      showCancelButton: true,
      confirmButtonText: "OUI",
      cancelButtonText: "NON",
      reverseButtons: false,
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        if (user) {
          await saveGame(pointsGame, questionNb, user, level, isAskPublic, isCallHome, isHalfPossibility);
        }
        dispatch(setIsNewGame(!isNewGame));
        dispatch(setIsStartTimer(!isStartTimer));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        if (user) {
          await saveGame(pointsGame, questionNb, user, level, isAskPublic, isCallHome, isHalfPossibility);
        }
        dispatch(setIsAnswerSelected(false));
        dispatch(setIsAskPublic(false));
        dispatch(setIsHalfPossibility(false));
        dispatch(setPointsGame(0));
        navigate("/", { replace: true });
      }
    });
}
