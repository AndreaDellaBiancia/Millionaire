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
} from "./CssNav";

import logo from "../../assets/images/milionLogo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChoosedAnswer, setIsAnswerSelected, setLevel, setQuestionNb, setQuestions } from "../../store/gameReducer";
import Swal from "sweetalert2";
import { setPointsGame } from "../../store/awardsReducer";
import { setIsAskPublic, setIsCallHome, setIsHalfPossibility } from "../../store/helpReducer";

function Navbar() {
  const [isHoveredProfile, setIsHoveredProfile] = useState<boolean>(false);
  const [isPageGame, setIsPageGame] = useState<boolean>(false);
  const [levelName, setLevelName] = useState<string>("FACILE");
  const dispatch = useDispatch();
  const pathname: string = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    // Si on est dans la page du Jeu on empeche de changer le niveau.
    pathname === "/jeu" ? setIsPageGame(true) : setIsPageGame(false);
  }, [pathname]);
 
 
  const handleLevel = (levelSelected: string) => {
    dispatch(setLevel(levelSelected));
    if (levelSelected === "easy") {
      setLevelName("FACILE");
    } else if (levelSelected === "medium") {
      setLevelName("NORMAL");
    } else {
      setLevelName("DIFFICILE");
    }
  };

  const handleMouseEnterProfile = () => {
    setIsHoveredProfile(true);
  };
  const handleMouseLeaveProfile = () => {
    setIsHoveredProfile(false);
  };

  function changePage(path: string) {
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

  const normalIcon = <i className="fa-solid fa-user fa-lg"></i>;
  const hoverIcon = <i className="fa-solid fa-user fa-bounce fa-lg"></i>;

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{cursor: "pointer"}}>
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
                    <option value="medium" selected={levelName === "NORMAL"}>
                      Normal
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
              <ButtonPlay >
                <Link to="/jeu">
                  <button type="button" className="btn btn-outline-primary">
                    JOUER
                  </button>
                </Link>
              </ButtonPlay>
            )}

            <NavProfile
              className="nav-item"
              onMouseEnter={handleMouseEnterProfile}
              onMouseLeave={handleMouseLeaveProfile}
            >
              <Link
                to="/classement"
                className="nav-link active"
                aria-current="page"
              >
                {isHoveredProfile ? hoverIcon : normalIcon}
              </Link>
            </NavProfile>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
