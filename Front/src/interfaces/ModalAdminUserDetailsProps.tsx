import Game from "./GameInterface";
import User from "./UserInterface";

interface ModalAdminUserDetailsProps {
  userId : number | undefined;
  show: boolean;
  setModalShow: (value: boolean) => void;
  onHide: () => void;
}

export default ModalAdminUserDetailsProps;
