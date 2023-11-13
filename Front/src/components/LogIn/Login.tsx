import { useEffect, useState } from "react";
import {
  Container,
  FormLogin,
  PasswordContainer,
  RegisterLink,
} from "./CssLogin";
import { getToken } from "../../fetch/fetchLogin";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userReducer";
import Registration from "../Registration/Registration";
import LoginProps from "../../interfaces/LoginInterface";
import openEye from "../../assets/images/openEye.png";
import closeEye from "../../assets/images/closeEye.png";

function LogIn({
  classLoginOpen,
  loginClassClose,
  setClassLoginOpen,
}: LoginProps) {
  const [modalShow, setModalShow] = useState(false);
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
  }, [classLoginOpen]);

  const handleSubmit = async () => {
    if (password && email) {
      try {
        const token = await getToken(email, password);
        dispatch(setToken(token));
        localStorage.setItem("token", token);
        setErrorConnexion("");
      } catch (error: any) {
        setErrorConnexion(error.message);
      }
    }else{
      setErrorConnexion("Renseigner email et password")
    }
  };

  function handleRegisterLink() {
    setModalShow(true);
    setClassLoginOpen(loginClassClose);
  }
  return (
    <Container id="loginContainer" className={classLoginOpen}>
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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={!isShowPassword ? "password" : "text"}
            className="form-control"
            id="exampleInputPassword1"
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

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline-primary"
        >
          CONNEXION
        </button>
        <RegisterLink onClick={handleRegisterLink}>
          Je veux m'inscrire
        </RegisterLink>
        <Registration
          show={modalShow}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </FormLogin>
    </Container>
  );
}

export default LogIn;
