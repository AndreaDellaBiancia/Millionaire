import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { sendEmail } from "../../fetch/fetchSendEmail";
import Swal from "sweetalert2";

function ModalResetPassword(props: any) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail("");
  }, [props]);

  function handleSendEmail() {
    async function fetchData() {
      try {
        await sendEmail(email);
        props.setModalShow(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email envoyé",
          showConfirmButton: false,
          timer: 2000
        });

      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email non envoyé",
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
    fetchData();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ display: "block", textAlign: "center" }}
        >
          Mot de passe oublié
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4 style={{ textAlign: "center" }}>Email</h4>
        <input
          style={{
            width: "50%",
            margin: "0 auto",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <button
          style={{ width: "50%", margin: "1.5rem auto", textAlign: "center" }}
          type="submit"
          className="btn btn-outline-primary"
          onClick={handleSendEmail}
        >
          Valider
        </button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalResetPassword;
