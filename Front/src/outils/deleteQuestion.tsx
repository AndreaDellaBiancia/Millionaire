import Swal from "sweetalert2";
import { deleteQuestion } from "../fetch/fetchAdminDeleteQuestion";

export async function deleteQuestionModal(
  idQuestion: number | undefined,
  titleQuestion: string | undefined,
  setIsDeleteQuestion: any,
  isDeleteQuestion: boolean
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
    }
  });
}
