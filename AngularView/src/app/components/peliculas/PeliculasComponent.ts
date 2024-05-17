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
    this.peliculas = this._srvPelicula.getPeliculas();
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
