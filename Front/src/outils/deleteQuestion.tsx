import Swal from "sweetalert2";
import { deleteQuestion } from "../fetch/fetchAdminDeleteQuestion";

export async function deleteQuestionModal(
  idQuestion: number | undefined,
  titleQuestion: string | undefined,
  setIsDeleteQuestion: any,
  isDeleteQuestion: boolean,
  roleCurrentUser: string | undefined
) {
  Swal.fire({
    title: "Veux-tu supprimer cette question ?",
    text: titleQuestion,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprime-la!",
    cancelButtonText: "Annuler",
  }).then(async (result) => {
    if (result.isConfirmed) {
      //On executel'operation seulement si l'utilisateur est un SUPER_ADMIN
      if (roleCurrentUser === "SUPER_ADMIN") {
        try {
          await deleteQuestion(idQuestion);
          setIsDeleteQuestion(!isDeleteQuestion);
          Swal.fire({
            title: "Supprimée!",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Erreur pendant la suppression.",
            icon: "error",
          });
        }
      }else{
        Swal.fire({
          title: "Opération non autorisée.",
          text: "Seuls les super admins peuvent supprimer une question.",
          icon: "error",
        });
      }
    }
  });
}
