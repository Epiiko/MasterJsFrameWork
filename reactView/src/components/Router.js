import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeccionPruebas from "./SeccionPruebas";
import MiComponente from "./miComponente";
import Peliculas from "./Peliculas";
import Error from "./Error";
import Header from "./Header";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Peliculas />} />
          <Route path="/ruta-prueba" element={<SeccionPruebas />} />
          <Route path="/segunda-ruta" element={<MiComponente />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default Router;
