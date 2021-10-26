import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//props is used to fetch data from parent fucntion component to child functional component Like In Angular we use input tag
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.switchMode} bg-${props.switchMode}`}>
      <div className="container-fluid">
        <div className="navbar-brand">{props.navbarTiltle}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">
                Home
              </div>
            </li>
          </ul>
        <div className={`form-check form-switch text-${props.switchMode==='light'?'dark':'light'}`}>
          <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="darkModeBtn" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="modeLabel">Switch To Dark Mode</label>
        </div>
        </div>
      </div>
    </nav>
  );
}


/* 
1. Props are used to pass data dynamically when the content in the html has to change dynamically as per condition.

2. Props in REACT JS are same as (@INPUT) directive in angular to bind data dynamically.

3. You Can set the data types of props as per requirement.

4.You can set the default props so that if no one enter the details then default text will be shown using default props.

*/

//Set Proptype Datatypes
Navbar.prototype = {
  navbarTiltle: PropTypes.string.isRequired,
  about: PropTypes.string,
};

//Set Default Proptype 
Navbar.defaultProps = {
  navbarTiltle: "Default Title",
  about: "Default About",
};
