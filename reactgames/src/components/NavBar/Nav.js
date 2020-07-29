import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-wrapper  blue darken-4">
        <a href="/" className="brand-logo">
          Game
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">
              <i className="material-icons">account_box</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons">add</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons">camera_alt</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
