import React from "react";
import MiComponente from "./miComponente.js";
class SeccionPrueba extends React.Component {
  contador = 0;
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  render() {
    return (
      <section id="content">
        <h2 className="subheader">Prueba inicial</h2>

        <p>SOS BOLETA TARADO</p>
        <hr />
        <section className="components">
          <h2>Compoenentes</h2>
          <MiComponente />
          <MiComponente />
          <hr />
        </section>
        <h2>Estado de un Compoenente</h2>
        <p>{this.state.contador}</p>
        <p>
          <input
            type="button"
            value="Sumar"
            className="btn btn-success"
            onClick={this.sumar}
          />
        </p>
        <p>
          <input
            type="button"
            value="Restar"
            className="btn"
            onClick={this.restar}
          />
        </p>
      </section>
    );
  }
  sumar=()=> {
    // this.state.contador=this.state.contador+1;
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar=() => {
    // this.state.contador=this.state.contador-1;
    this.setState({
      contador: this.state.contador - 1,
    });
  }
}
export default SeccionPrueba;
