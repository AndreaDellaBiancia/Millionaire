import Swal from "sweetalert2";
import arrow from "../assets/images/gifArrow.gif";

export function popupIsAlredyRegistered(){
  Swal.fire({
    position: "top",
    titleText:  "Plongez dans l'action ! Connectez-vous ou créez un compte pour grimper dans le classement !",
    width: 600,
    padding: "3em",
    color: "#716add",
    showConfirmButton: false,
    timer: 7000,
    backdrop: `
      rgba(0,0,123,0.4)
      url(${arrow})
      top right
      no-repeat
    `
  });
}