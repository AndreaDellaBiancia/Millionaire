import { Link, NavLink, useLocation } from "react-router-dom";
import { Nav, NavItem, NavItemLevelSelected, NavItemNiveau, NavProfile, NavSelect } from "./CssNav";

import logo from "../../assets/images/milionLogo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../store/gameReducer";
import { RootState } from "../../store/store";

function Navbar() {
  const [isHoveredProfile, setIsHoveredProfile] = useState<boolean>(false);
  const [isPageGame, setIsPageGame] = useState<boolean>(false);
  const [levelName, setLevelName] = useState<string>("FACILE");

  const pathname = useLocation().pathname;

  useEffect(() => {
    // Si on est dans la page du Jeu on empeche de changer le niveau.
    pathname === "/jeu" ? setIsPageGame(true) : setIsPageGame(false);
  }, [pathname]);

  const dispatch = useDispatch();
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

  const normalIcon = <i className="fa-solid fa-user fa-lg"></i>;
  const hoverIcon = <i className="fa-solid fa-user fa-bounce fa-lg"></i>;

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="logo milionaire" height="75px" />
        </Link>
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
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link
                to="/classement"
                className="nav-link active"
                aria-current="page"
              >
                Classement
              </Link>
            </NavItem>
            <NavItemNiveau className="nav-item">Niveau :</NavItemNiveau>
            <NavSelect className="nav-item" style={{ margin: 0 }}>
              {!isPageGame ? (
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleLevel(e.target.value)}
                >
                  <option value="easy" selected={levelName === "FACILE"} >Facile</option>
                  <option value="medium"selected={levelName === "NORMAL"}>Normal</option>
                  <option value="hard" selected={levelName === "DIFFICILE"}>Difficile</option>
                </select>
              ) : (
                <NavItemLevelSelected>{levelName}</NavItemLevelSelected>
              )}
            </NavSelect>
          </ul>

          <ul className="navbar-nav d-flex align-items-center">
          {!isPageGame && <li style={{marginRight: "2rem"}}><Link to="/jeu" ><button type="button" className="btn btn-outline-primary">JOUER</button></Link></li>}

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
