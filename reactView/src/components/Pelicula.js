import React from "react";
class Pelicula extends React.Component{
    render(){
        let pelicula= this.props.pelicula
        const {titulo, image} = pelicula;
        return(
            <article className="article-item" id="article-template">
            <div className="img-wrap">
              <img src={image} alt={titulo} />
            </div>
            <h2>{titulo}</h2>
            <span className="date">Hace 5 min</span>
            <a href="">Leer más</a>
            <button onClick={this.marcar}>Añadir a favoritos</button>
            <div className="clearfix"></div>
          </article>
        )
   
    }
    marcar=()=>{
        this.props.marcarFavorita(this.props.pelicula, this.props.indice)
    }
}
export default Pelicula;