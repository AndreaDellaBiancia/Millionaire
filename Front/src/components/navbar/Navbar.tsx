import { Link } from "react-router-dom";
import { Nav, NavItem, NavProfile, NavSelect } from "./CssNav";

import logo from "../../assets/images/milionLogo.png";
import { useState } from "react";

function Navbar() {
  const [isHoveredProfile, setIsHoveredProfile] = useState<boolean>(false);

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
            <NavSelect className="nav-item">
              <p style={{marginRight: "1rem"}}>Niveau:</p>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1">Facile</option>
                <option value="2">Normal</option>
                <option value="3">Difficile</option>
              </select>
            </NavSelect>
          </ul>

          <ul className="navbar-nav">
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
