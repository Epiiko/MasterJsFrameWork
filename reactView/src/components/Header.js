import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div class="center">
          {/* <!-- Logo --> */}
          <div id="logo">
            <img src={logo} alt="logotipo" class="app-logo" />
            <span id="brand">
              {" "}
              <strong>Curso</strong>React{" "}
            </span>
          </div>
          {/* <!-- Menu --> */}
          <nav id="menu">
            {/* <ul>
              <li>
                <NavLink to="">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="">Blog</NavLink>
              </li>
              <li>
                <NavLink to="">Formulario</NavLink>
              </li>
              <li>
                <NavLink to="">Pagina1</NavLink>
              </li>
              <li>
                <NavLink to="">Pagina2</NavLink>
              </li>
            </ul> */}
          </nav>
          <div class="clearfix"></div>
        </div>
      </header>
    );
  }
}
export default Header;
