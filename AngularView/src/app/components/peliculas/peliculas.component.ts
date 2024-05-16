import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Pelicula }  from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, SliderComponent, SidebarComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  constructor(){
    this.peliculas= [
      new Pelicula ("Spiderman4", 2019, "../../../assets/images/spiderman.jpg" ),
      new Pelicula ("Batman", 2014, "../../../assets/images/batman.jpg" ),
      new Pelicula ("Vengadores", 2018, "../../../assets/images/vengadores.jpg" ),
      new Pelicula ("Harry Potter", 2020, "../../../assets/images/HP.jpg" ),
      // {year: 2019, title: "Spiderman4", image: "../../../assets/images/spiderman.jpg"},
      // {year: 2014, title: "Batman", image: "../../../assets/images/batman.jpg"},
      // {year: 2018, title: "Vengadores", image: "../../../assets/images/vengadores.jpg"},
      // {year: 2020, title: "Harry Potter", image: "../../../assets/images/HP.jpg"}
    ]
    this.titulo="Listado de Peliculas"
  }
  ngOnInit(): void {
    console.log("Componenete cargado");
    
  }
  ngDoCheck(): void {
    console.log("DO CHECK LANZADO");
    
  }
  cambioTitulo(){
    this.titulo="TITULO CAMBIAU"
  }
  ngOnDestroy(): void {
    console.log("EL COMPO SE VA A ELIMINARR");
  }
}
