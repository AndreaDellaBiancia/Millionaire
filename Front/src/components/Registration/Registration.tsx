import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeEye from "../../assets/images/closeEye.png";
import openEye from "../../assets/images/openEye.png";

import "./style.css";
import { registration } from "../../fetch/fetchRegistration";
import { getToken } from "../../fetch/fetchToken";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../store/userReducer";

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

  const [errorRegistration, setErrorRegistration] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setEmail("");
    setUsername("");
    setPassword("");
    setIsShowPassword(false);
    setPasswordConfirm("");
    setIsShowPasswordConfirm(false);
  }, [props]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
      if (regexEmail.test(email)) {
        if (regexPassword.test(password)) {
          if (password !== passwordConfirm) {
            setIsErrorPasswords(true);
          } else {
            setIsErrorPasswords(false);
            if (emailDone && usernameDone && password && passwordConfirm) {
              try {
                // Si toutes les données ont été bien renseignées on ajoute l'utilisateur en BDD
                await registration(email, username, password);
                // Et ensuite on recupere le token
                const tokenData = await getToken(email, password);
                dispatch(setToken(tokenData.token));
                localStorage.setItem("token", tokenData.token);
                localStorage.setItem("userId", tokenData.userId);

                setErrorRegistration("");
                props.setModalShow(false);
              } catch (error: any) {
                setErrorRegistration(error.message);
              }
            }
          }
        } else {
          setErrorPassword("Password non valide");
        }
      } else {
        setErrorEmail("Email non valide");
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
              <small className="form-text text-muted error-message">
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
            />
            {errorUsername && (
              <small
                id="emailHelp"
                className="form-text text-muted error-message"
              >
                {errorUsername}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword1">
              Password *{" "}
              <span style={{ fontSize: 15 }}>
                (6 caractères min., 1 majuscule, 1 minuscule, 1 chiffre, 1
                caractère spécial)
              </span>
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control"
              id="inputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              id="password-input-img"
              onClick={() => setIsShowPassword(!isShowPassword)}
              src={isShowPassword ? openEye : closeEye}
              alt=""
            />
            {errorPassword && (
              <small
                id="emailHelp"
                className="form-text text-muted error-message"
              >
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
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <img
              onClick={() => setIsShowPasswordConfirm(!isShowPasswordConfirm)}
              src={isShowPasswordConfirm ? openEye : closeEye}
              alt=""
            />
            {errorPasswordConfirm && (
              <small className="form-text text-muted error-message">
                {errorPasswordConfirm}
              </small>
            )}
            {!errorPasswordConfirm && isErrorPasswords && (
              <span>Les passwords ne corrispondent pas.</span>
            )}
          </div>
          {errorRegistration && <span>{errorRegistration}</span>}
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
