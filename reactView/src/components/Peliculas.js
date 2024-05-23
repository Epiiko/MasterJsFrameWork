import React from "react";
import MensajeEstatico from "./MensajeEstatico";
import Pelicula from "./Pelicula";
class Peliculas extends React.Component {
  state = {};
  cambiarTitulo = () => {
    let { peliculas } = this.state;
    peliculas[~~(Math.random() * 3)].titulo = "Batman Vs Superman 2.0";
    this.setState({
      peliculas: peliculas,
    });
  };
  marcarFavorita = (pelicula, indice) => {
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula,
    });
  };
  //ciclo de vida antes de que se termine de montar ejecuta
  componentWillMount() {
    this.state = {
      peliculas: [
        {
          titulo: "Batman Vs Superman",
          image:
            "https://images.ecestaticos.com/iPpZiNZ7UdxSu__vCjyamtKdk6E=/2x0:1279x718/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F578%2F59e%2F1c3%2F57859e1c30d7f9871400ceb3512cb9e7.jpg",
        },
        {
          titulo: "Harry Potter",
          image:
            "https://www.fanisetas.com/blog/storage/2019/02/maxresdefault.jpg",
        },
        {
          titulo: "Matrix",
          image:
            "https://estaticos-cdn.prensaiberica.es/clip/3678c50c-e36a-4ce1-a8ea-bf7e6d655093_16-9-discover-aspect-ratio_default_0.jpg",
        },
      ],
      nombre: "Nacho Diaz",
      favorita: "",
    };
  }
  //ciclo de vida cuando se ha montado 
  componentDidMount(){
        //para ejectutar una vez montado el componente entero
  }
  //ciclo de vida cuando se desmonta el componente
  componentWillUnmount(){

  }
  render() {
    let style = { background: "green", color: "white", padding: "10px" };
    let style2 = { background: "red", color: "white", padding: "10px" };
    let favorita;
    if(this.state.favorita.titulo){
        favorita=(<p className="favorita" style={style}>
        <strong>La pelicula favorita es: </strong>
        <span>{this.state.favorita.titulo}</span>
      </p>)
    }else{
        favorita=( <p className="favorita" style={style2}>No hay Peli favorita</p>)
    };
    return (
      <div id="content" className="peliculas">
        <MensajeEstatico />
        <p>Selección de peliculas elegidas por {this.state.nombre}</p>
        <p>
          <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
        </p>
        {favorita}
        {/* {this.state.favorita.titulo?("caso afirmativo"):("caso negativo")} */}
        <div id="articles" className="peluclas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula
                key={i}
                indice={i}
                pelicula={pelicula}
                marcarFavorita={this.marcarFavorita}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Peliculas;
