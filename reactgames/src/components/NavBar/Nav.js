import React from "react";

const Nav = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/">
              <i class="material-icons">account_box</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="material-icons">add</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="material-icons">camera_alt</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;