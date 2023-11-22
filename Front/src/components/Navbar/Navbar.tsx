import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ButtonPlay,
  Nav,
  NavItem,
  NavItemLevelSelected,
  NavItemNiveau,
  NavProfile,
  NavSelect,
  NiveauContainer,
  ProfileOptionContainer,
} from "./CssNav";

import logo from "../../assets/images/milionLogo.png";
import coin from "../../assets/images/gold-coin.svg";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setChoosedAnswer,
  setIsAnswerSelected,
  setLevel,
  setQuestionNb,
  setQuestions,
} from "../../store/gameReducer";
import Swal from "sweetalert2";
import { setPointsGame } from "../../store/awardsReducer";
import {
  setIsAskPublic,
  setIsCallHome,
  setIsHalfPossibility,
} from "../../store/helpReducer";
import LogIn from "../LogIn/Login";
import { RootState } from "../../store/store";
import { setToken, setUser } from "../../store/userReducer";
import { getUser } from "../../fetch/fetchUser";

function Navbar() {
  const [classLogin, setClassLogin] = useState<string>("");
  const [classProfile, setClassProfile] = useState<string>("");

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const [isHoveredProfile, setIsHoveredProfile] = useState<boolean>( );
  const [isPageGame, setIsPageGame] = useState<boolean>(false);
  const [levelName, setLevelName] = useState<string>("FACILE");
  const token = useSelector((state: RootState) => state.user.token);
  const user = useSelector((state: RootState) => state.user.user);
  const roleUser = useSelector(
    (state: RootState) => state.user.user?.role?.name
  );

  const tokenLocal = localStorage.getItem("token");
  const loginClassOpen = "animate__animated animate__bounceInDown";
  const loginClassClose = "animate__animated animate__bounceOutUp";

  const profileClassOpen = "animate__animated animate__fadeInRight";
  const profileClassClose = "animate__animated animate__fadeOutLeft";
  const pathname: string = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Si on est dans la page du Jeu on empeche de changer le niveau.
    pathname === "/jeu" ? setIsPageGame(true) : setIsPageGame(false);
  }, [pathname]);

  useEffect(() => {
    // Quand la valeur du token de redux change, on regarde si dans le local storage on a un token
    // et si c'est le cas, on recupere l'utilisateur et on le stock dans redux
    async function getUserData(id: number) {
      const user = await getUser(id);
      dispatch(setUser(user));
    }
    if (tokenLocal) {
      dispatch(setToken(tokenLocal));
      setClassLogin(loginClassClose);
      const userId = Number(localStorage.getItem("userId"));
      getUserData(userId);
    }
     // On declanche l'animation de l'icone profile pendant 6 seconds
     setIsHoveredProfile(true);
     setTimeout(() => {
       setIsHoveredProfile(false);
     }, 6000)
  }, [token]);

  const handleLevel = (levelSelected: string): void => {
    dispatch(setLevel(levelSelected));
    if (levelSelected === "easy") {
      setLevelName("FACILE");
    } else {
      setLevelName("DIFFICILE");
    }
  };

  const handleMouseEnterProfile = (): void => {
    setIsHoveredProfile(true);
  };
  const handleMouseLeaveProfile = (): void => {
    setIsHoveredProfile(false);
  };

  function changePage(path: string): void {
    // Si ProfileOptionContainer est ouvert, on le ferme
    if (profileClassOpen === classProfile) {
      setClassProfile(profileClassClose);
    }
    // Si pendant le jeu on veux changer de page on affiche un alert
    setClassLogin(loginClassClose);
    if (pathname === "/jeu") {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Tu veux quitter la partie?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI",
          cancelButtonText: "NON",
          reverseButtons: false,
        })
        .then((result) => {
          // Si on quitte la page on met les infos du jeu à 0
          if (result.isConfirmed) {
            dispatch(setIsAnswerSelected(false));
            dispatch(setPointsGame(0));
            dispatch(setQuestions([]));
            dispatch(setQuestionNb(0));
            dispatch(setChoosedAnswer({}));
            dispatch(setIsHalfPossibility(false));
            dispatch(setIsAskPublic(false));
            dispatch(setIsCallHome(false));
            navigate(path, { replace: true });
          }
        });
    } else {
      navigate(path, { replace: true });
    }
  }

  function handleLoginOpen(): void {
    const loginContainerHtml = document.querySelector("#loginContainer");
    // On gére l'overture ou la fermeture du composant login
    if (!isLoginOpen) {
      //On set display block
      if (loginContainerHtml instanceof HTMLElement) {
        loginContainerHtml.style.display = "block";
      }
      setIsLoginOpen(true);
    }
    if (classLogin === loginClassOpen) {
      setClassLogin(loginClassClose);
    } else {
      //On set display block
      if (loginContainerHtml instanceof HTMLElement) {
        loginContainerHtml.style.display = "block";
      }
      setClassLogin(loginClassOpen);
    }

    // Si la NavBar est en version mobile on utilise displau block pour cacher le ProfileOptionContainer
    const navBarMobile = document.querySelector("nav");
    const btnNav = navBarMobile?.querySelector("button");
    if (!navBarMobile?.classList.contains("show")) {
      btnNav?.addEventListener("click", function () {
        if (loginContainerHtml instanceof HTMLElement) {
          loginContainerHtml.style.display = "none";
        }
      });
    }
  }

  // Si le composant LOGIN est affiché et on click dans la page (sauf sur la nav) le composant se ferme
  const root = document.querySelector("#root");
  const screen = root?.firstChild?.childNodes[1];

  screen?.addEventListener("click", function () {
    if (classLogin === loginClassOpen || classLogin === "") {
      setClassLogin(loginClassClose);
    }
  });

  function handleProfileOption(): void {
    // Quand l'utilisateur est connecté on affiche, si cliqué sur l'image de la piece dorée,
    // le menu pour se deconnecter ou pour aller sur le profile de l'utilisateur.
    const profileOptionHtml = document.querySelector(
      "#profile-container-option"
    );

    //Si ProfileOptionContainer est affiché
    if (classProfile === profileClassOpen) {
      //Si on est en taille mobile on set display none
      if (window.screen.width < 991) {
        if (profileOptionHtml instanceof HTMLElement) {
          profileOptionHtml.style.display = "none";
        }
      }
      // On change de classe pour le faire disparaitre
      setClassProfile(profileClassClose);
    } else {
      //Sinon on on set display block et onn change de classe pour le faire apparaitre
      if (profileOptionHtml instanceof HTMLElement) {
        profileOptionHtml.style.display = "block";
      }
      setClassProfile(profileClassOpen);
    }

    // Si la NavBar est en version mobile on utilise displau block pour cacher le ProfileOptionContainer
    const navBarMobile = document.querySelector("nav");
    const btnNav = navBarMobile?.querySelector("button");
    if (!navBarMobile?.classList.contains("show")) {
      btnNav?.addEventListener("click", function () {
        if (profileOptionHtml instanceof HTMLElement) {
          profileOptionHtml.style.display = "none";
        }
      });
    }
  }

  // Si on click sur l'ecran sauf sur la nav, on fait disparaitre le ProfileOptionContainer
  screen?.addEventListener("click", function () {
    if (classProfile === profileClassOpen || classProfile === "") {
      //Si on est en taille mobile on fait rien
      if (window.screen.width > 991) {
        setClassProfile(profileClassClose);
      }
    }
  });

  function handleLogout(): void {
    const profileOptionHtml = document.querySelector(
      "#profile-container-option"
    );
    if (profileOptionHtml instanceof HTMLElement) {
      profileOptionHtml.style.display = "none";
    }
    window.location.replace("/");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(setToken(""));
    dispatch(setUser({}));
    setClassProfile(profileClassClose);
  }

  const normalIcon = <i className="fa-solid fa-user fa-lg"></i>;
  const hoverIcon = <i className="fa-solid fa-user fa-bounce fa-lg"></i>;

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ cursor: "pointer" }}>
        <div onClick={() => changePage("/")}>
          <img src={logo} alt="logo milionaire" height="75px" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <NavItem className="nav-item">
              <div
                className="nav-link active"
                aria-current="page"
                onClick={() => changePage("/")}
              >
                Home
              </div>
            </NavItem>
            <NavItem className="nav-item">
              <div
                className="nav-link active"
                aria-current="page"
                onClick={() => changePage("/classement")}
              >
                Classement
              </div>
            </NavItem>
            <NiveauContainer>
              <NavItemNiveau className="nav-item">Niveau :</NavItemNiveau>
              <NavSelect className="nav-item" style={{ margin: 0 }}>
                {!isPageGame ? (
                  <select
                    className="form-select form-select-lg"
                    onChange={(e) => handleLevel(e.target.value)}
                  >
                    <option value="easy" selected={levelName === "FACILE"}>
                      Facile
                    </option>
                    <option value="hard" selected={levelName === "DIFFICILE"}>
                      Difficile
                    </option>
                  </select>
                ) : (
                  <NavItemLevelSelected>{levelName}</NavItemLevelSelected>
                )}
              </NavSelect>
            </NiveauContainer>
          </ul>

          <ul className="navbar-nav d-flex align-items-center">
            {!isPageGame && (
              <ButtonPlay>
                <Link to="/jeu">
                  <button type="button" className="btn btn-outline-primary">
                    JOUER
                  </button>
                </Link>
              </ButtonPlay>
            )}
            {(roleUser === "ADMIN" || roleUser === "SUPER_ADMIN") && (
              <NavItem
                className="nav-item"
                style={{ display: "flex", flexDirection: "column" }}
                onClick={() => changePage("/admin/questions")}
              >
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <div
                  className="nav-link active"
                  aria-current="page"
                  style={{ fontSize: "1rem" }}
                >
                  ADMINISTRATION
                </div>
              </NavItem>
            )}

            {!token ? (
              <NavProfile
                className="nav-item"
                onMouseEnter={handleMouseEnterProfile}
                onMouseLeave={handleMouseLeaveProfile}
                onClick={handleLoginOpen}
              >
                {isHoveredProfile ? hoverIcon : normalIcon}
              </NavProfile>
            ) : (
              <NavProfile onClick={handleProfileOption}>
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: 0,
                    textTransform: "uppercase",
                    color: "blue",
                    fontSize: "1.3rem",
                  }}
                >
                  {user?.username}
                </p>

                <img src={coin} alt="piece dorée" style={{ width: "3rem" }} />
              </NavProfile>
            )}
          </ul>
        </div>
      </div>
      {isLoginOpen && (
        <LogIn
          classLogin={classLogin}
          loginClassClose={loginClassClose}
          setClassLogin={setClassLogin}
        />
      )}

      <ProfileOptionContainer
        onClick={() => changePage("/mon-profil")}
        id="profile-container-option"
        style={{ display: "none" }}
        className={classProfile}
      >
        <div>PROFIL</div>
        <div onClick={handleLogout}>DÉCONNEXION</div>
      </ProfileOptionContainer>
    </Nav>
  );
}

export default Navbar;
