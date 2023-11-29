import { useEffect, useState } from "react";
import {
  Container,
  ForgotPassword,
  FormLogin,
  PasswordContainer,
} from "./CssLogin";
import { getToken } from "../../fetch/fetchToken";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userReducer";
import Registration from "../Registration/Registration";
import LoginProps from "../../interfaces/LoginInterface";
import openEye from "../../assets/images/openEye.png";
import closeEye from "../../assets/images/closeEye.png";
import ModalResetPassword from "../ModalResetPassword/ModalResetPassword";

function LogIn({ classLogin, loginClassClose, setClassLogin }: LoginProps) {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalResetPassword, setModalResetPassword] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorConnexion, setErrorConnexion] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setIsShowPassword(false);
    setErrorConnexion("");
  }, [classLogin]);

  const handleSubmit = async () => {
    // Si le mdp et l'email ont été saisis, on recupere le token de l'utilisateur
    // et on le stock dans le local storage et dans redux
    if (password && email) {
      try {
        const tokenData = await getToken(email, password);
        dispatch(setToken(tokenData.token));
        localStorage.setItem("token", tokenData.token);
        localStorage.setItem("userId", tokenData.userId);
        setErrorConnexion("");
      } catch (error: any) {
        setErrorConnexion(error.message);
      }
    } else {
      setErrorConnexion("Renseigner email et password");
    }
  };

  function handleRegisterLink() {
    // On affiche la modale avec le formulaire d'inscription
    setModalRegisterShow(true);
    setClassLogin(loginClassClose);
  }

  function handleResetPassword() {
    // On affiche la modale avec le formulaire d'inscription
    setModalResetPassword(true);
    setClassLogin(loginClassClose);
  }
  return (
  
      <Container id="loginContainer" className={classLogin}>
        <FormLogin>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <PasswordContainer className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={!isShowPassword ? "password" : "text"}
              className="form-control"
              id="InputPassword1"
            />
            <img
              onClick={() => setIsShowPassword(!isShowPassword)}
              src={isShowPassword ? openEye : closeEye}
              alt=""
            />
          </PasswordContainer>
          {errorConnexion && (
            <small
              style={{ color: "red", margin: "0.5rem 0", textAlign: "center" }}
            >
              {errorConnexion}
            </small>
          )}
          <ForgotPassword onClick={handleResetPassword}>Mot de passe oublié</ForgotPassword>

          <ModalResetPassword show={modalResetPassword}
            setModalShow={setModalResetPassword}
            onHide={() => setModalResetPassword(false)}/>
          <button
            
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleSubmit}
          >
            CONNEXION
          </button>
          <hr
            style={{
              border: 0,
              borderTop: "1px solid black",
              margin: "1.5rem 0",
            }}
          />
          <button
            onClick={handleRegisterLink}
            type="submit"
            className="btn btn-outline-primary"
          >
            INSCRIPTION
          </button>
          <Registration
            show={modalRegisterShow}
            setModalShow={setModalRegisterShow}
            onHide={() => setModalRegisterShow(false)}
          />
        </FormLogin>
      </Container>
    
  );
}

export default LogIn;
