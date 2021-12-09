import Logo from "../public/assets/images/logo.png";
import "./navbar.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const HandleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="navbarcontainer">
      <div className={open ? "barcontainer open" : "barcontainer"}>
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          color="black"
          onClick={() => HandleClick()}
        />
      </div>

      <div
        className={
          open ? "navcomponentscontainer open" : "navcomponentscontainer"
        }
      >
        <div className={open ? "close open" : "close"}>
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            className="closeicon"
            icon={faTimes}
            color="black"
            onClick={() => {
              HandleClick();
            }}
          />
        </div>
        <div className="navcomponents">
          <div className="navimage">
            <img src={Logo} alt="logo" className="navimage" />
          </div>

          <div className="navlinkscontainer">
            <ul className="navlinks">
              <li>Pricing</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="navbuttons">
          <button style={{ backgroundColor: "white" }}>Sign In</button>
          <button style={{ backgroundColor: "black", color: "white" }}>
            Create free account
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
