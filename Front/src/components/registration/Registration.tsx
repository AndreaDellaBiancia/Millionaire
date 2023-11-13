import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeEye from "../../assets/images/closeEye.png";
import openEye from "../../assets/images/openEye.png";

import "./style.css";

function Registration(props: any) {
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errorUsername, setErrorUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<string>("");

  const [isShowPasswordConfirm, setIsShowPasswordConfirm] =
    useState<boolean>(false);
  const [isErrorPasswords, setIsErrorPasswords] = useState<boolean>(false);

  useEffect(() => {
    setEmail("");
    setUsername("");
    setPassword("");
    setIsShowPassword(false);
    setPasswordConfirm("");
    setIsShowPasswordConfirm(false);
  }, [props]);

  function handleSubmit(e: any): void {
    e.preventDefault();
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    const emailDone = email
      ? (setErrorEmail(""), true)
      : (setErrorEmail("Renseigner une adresse email"), false);
    const usernameDone = username
      ? (setErrorUsername(""), true)
      : (setErrorUsername("Renseigner un surnom"), false);
    const passwordDone = password
      ? (setErrorPassword(""), true)
      : (setErrorPassword("Renseigner un password"), false);
    const passwordConfirmDone = passwordConfirm
      ? (setErrorPasswordConfirm(""), true)
      : (setErrorPasswordConfirm("Renseigner la confirmation du password"),
        false);

    if (passwordDone && passwordConfirmDone) {
      if (regexPassword.test(password)) {
        if (password !== passwordConfirm) {
          setIsErrorPasswords(true);
        } else {
          setIsErrorPasswords(false);
          if (emailDone && usernameDone && password && passwordConfirm) {
            console.log("====================================");
            console.log("requete");
            console.log("====================================");
          }
        }
      } else {
        setErrorPassword("Password non valide");
      }
    }
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
          style={{ width: "100%" }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            INSCRIPTION
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email *</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && (
              <small id="emailHelp" className="form-text text-muted">
                {errorEmail}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail1">Surnom *</label>
            <input
              type="text"
              className="form-control"
              id="inputSurnom"
              aria-describedby="surnomHelp"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errorUsername && (
              <small id="emailHelp" className="form-text text-muted">
                {errorUsername}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword1">Password *</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control"
              id="inputPassword1"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              onClick={() => setIsShowPassword(!isShowPassword)}
              src={isShowPassword ? openEye : closeEye}
              alt=""
            />
            {errorPassword && (
              <small id="emailHelp" className="form-text text-muted">
                {errorPassword}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword2">Confirmer Password *</label>
            <input
              type={isShowPasswordConfirm ? "text" : "password"}
              className="form-control"
              id="inputPassword2"
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <img
              onClick={() => setIsShowPasswordConfirm(!isShowPasswordConfirm)}
              src={isShowPasswordConfirm ? openEye : closeEye}
              alt=""
            />
            {errorPasswordConfirm && (
              <small id="emailHelp" className="form-text text-muted">
                {errorPasswordConfirm}
              </small>
            )}
            {!errorPasswordConfirm && isErrorPasswords && (
              <span>Les passwords ne corrispondent pas.</span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ fontSize: "1.5rem" }}
              onClick={(e) => handleSubmit(e)}
            >
              S'inscrire
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Registration;
