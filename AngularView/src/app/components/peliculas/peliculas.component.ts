import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  public titulo: string;
  public peliculas: Array<Object>;
  constructor(){
    this.peliculas= [
      {title: "Spiderman4", imagen: "../../../assets/images/spiderman.jpg"},
      {title: "Vengadores", imagen: "../../../assets/images/vengadores.jpg"},
      {title: "Harry Potter", imagen: "../../../assets/images/HP.jpg"}
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
