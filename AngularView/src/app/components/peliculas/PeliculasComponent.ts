import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, SliderComponent, SidebarComponent, PeliculaComponent, NgFor],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers:[PeliculaService]
})
export class PeliculasComponent {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha: any;
  public texto?: string;
  
  constructor(private  readonly _srvPelicula: PeliculaService) {
    this.peliculas = [
      new Pelicula("Spiderman4", 2019, "../../../assets/images/spiderman.jpg"),
      new Pelicula("Batman", 2014, "../../../assets/images/batman.jpg"),
      new Pelicula("Vengadores", 2018, "../../../assets/images/vengadores.jpg"),
      new Pelicula("Harry Potter", 2020, "../../../assets/images/HP.jpg"),
      // {year: 2019, title: "Spiderman4", image: "../../../assets/images/spiderman.jpg"},
      // {year: 2014, title: "Batman", image: "../../../assets/images/batman.jpg"},
      // {year: 2018, title: "Vengadores", image: "../../../assets/images/vengadores.jpg"},
      // {year: 2020, title: "Harry Potter", image: "../../../assets/images/HP.jpg"}
    ];
    this.titulo = "Listado de Peliculas";
    this.fecha = new Date(2020, 8, 12);
  }
  ngOnInit(): void {
    console.log(this._srvPelicula?.holaMundo());
  }
  cambioTitulo() {
    this.titulo = "TITULO CAMBIAU";
  }
  mostrarFavorita(ev: any) {
    this.favorita = ev.pelicula;
  }
}
