import { useEffect, useState } from "react";
import { Container, FormLogin, RegisterLink } from "./CssLogin";
import { getToken } from "../../fetch/login";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userReducer";
import Registration from "../registration/Registration";
import LoginProps from "../../interfaces/LoginInterface";


function LogIn({classLoginOpen, loginClassClose, setClassLoginOpen}: LoginProps) {
  const [modalShow, setModalShow] = useState(false);

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [classLoginOpen]);
  const handleSubmit = async () => {
    if (password && email) {
      try {
        const token = await getToken(email, password);
        dispatch(setToken(token));

        localStorage.setItem("token", token);
      } catch (error) {
        console.log(error);
      }
    }
  };

  function handleRegisterLink(){
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-outline-primary"
        >
          CONNEXION
        </button>
        <RegisterLink onClick={handleRegisterLink}>Je veux m'inscrire</RegisterLink>
        <Registration  show={modalShow} setModalShow={setModalShow}
        onHide={() => setModalShow(false)} />
      </FormLogin>
    </Container>
  );
}

export default LogIn;
