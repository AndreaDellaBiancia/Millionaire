import { useEffect, useState } from "react";
import closeEye from "../../assets/images/closeEye.png";
import openEye from "../../assets/images/openEye.png";

import "./style.css";
import { updatePassword } from "../../fetch/fetchUpdatePassword";
import { getToken } from "../../fetch/fetchToken";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userReducer";

function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<string>("");

  const [isShowPasswordConfirm, setIsShowPasswordConfirm] =
    useState<boolean>(false);
  const [isErrorPasswords, setIsErrorPasswords] = useState<boolean>(false);
  const [resetToken, setResetToken] = useState<string>("");

  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  // Effet pour mettre à jour le token de réinitialisation lorsque le paramètre token change
  useEffect(() => {
    if (token) {
      setResetToken(token);
    }
  }, [token]);

  // Effet pour réinitialiser les champs de mot de passe lorsque le composant est monté
  useEffect(() => {
    setPassword("");
    setIsShowPassword(false);
    setPasswordConfirm("");
    setIsShowPasswordConfirm(false);
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

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
          if (password && passwordConfirm) {
            try {
              // Appel à l'API pour mettre à jour le mot de passe
              const user = await updatePassword(password, resetToken);
              // Obtention d'un nouveau token après la mise à jour du mot de passe
              const tokenData = await getToken(user.email, password);
              dispatch(setToken(tokenData.token));

              localStorage.setItem("token", tokenData.token);
              localStorage.setItem("userId", tokenData.userId);
              navigate("/");
            } catch (error: any) {
              console.log("====================================");
              console.log(error);
              console.log("====================================");
            }
          }
        }
      } else {
        setErrorPassword("Password non valide");
      }
    }
  }
  return (
    <form
      style={{
        width: "50%",
        background: "white",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        alignItems: "center",
      }}
    >
      <div className="form-group">
        <label htmlFor="inputPassword1">
          Password *{" "}
          <span style={{ fontSize: 15 }}>
            (6 caractères min., 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère
            spécial)
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
          <small id="emailHelp" className="form-text text-muted error-message">
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
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "5rem" }}
        onClick={handleSubmit}
      >
        Valider
      </button>
    </form>
  );
}

export default ResetPassword;
