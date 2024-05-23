import React from "react";

class MiComponente extends React.Component{
  render() {
    let receta = {
      nombre: "PIZZA",
      ingredientes: ["Tomate", "Queso", "Jamon"],
      precio: 400,
    };
    return (
      <div>
        <h2>{receta.nombre}</h2>
        <p>{"Precio" + receta.precio}</p>
        <ul>
          {receta.ingredientes.map((element, i) => {
           return <li key={i}>{element}</li>;
          })}
        </ul>
        <hr />
      </div>
      // <div className="miComponente">
      //      <h1>Hola soy mi componente</h1>
      //     <p>Esto esta hecho por el Paisa</p>
      //     <hr/>
      // </div>
    );
  }
}
export default MiComponente;
