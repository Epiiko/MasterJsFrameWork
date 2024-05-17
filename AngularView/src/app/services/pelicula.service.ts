import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  public peliculas: Pelicula[]
  constructor() {
    this.peliculas =[
      new Pelicula("Spiderman4", 2019, "../../../assets/images/spiderman.jpg"),
      new Pelicula("Batman", 2014, "../../../assets/images/batman.jpg"),
      new Pelicula("Vengadores", 2018, "../../../assets/images/vengadores.jpg"),
      new Pelicula("Harry Potter", 2020, "../../../assets/images/HP.jpg"),
      // {year: 2019, title: "Spiderman4", image: "../../../assets/images/spiderman.jpg"},
      // {year: 2014, title: "Batman", image: "../../../assets/images/batman.jpg"},
      // {year: 2018, title: "Vengadores", image: "../../../assets/images/vengadores.jpg"},
      // {year: 2020, title: "Harry Potter", image: "../../../assets/images/HP.jpg"}
    ];
   }

  holaMundo(){
    return "HOLA MUNDO PERRO";
  }
  getPeliculas(){
    return this.peliculas;
  }
}
