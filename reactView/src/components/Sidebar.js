import React from "react";
import MensajeEstatico from "./MensajeEstatico";
class Peliculas extends React.Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="navblog" class="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <a href="" class="btn btn-success">
            Crear articulo
          </a>
        </div>

        <div id="search" class="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el articulo</p>
          <form action="">
            <input type="text" name="search" id="" />
            <input type="submit" value="Buscar" name="submit" class="btn" />
          </form>
        </div>
      </aside>
    );
  }
}
export default Peliculas;
