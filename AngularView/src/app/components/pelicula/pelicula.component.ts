import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, output} from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [NgClass, NgFor , NgIf],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  @Input() pelicula!:Pelicula;
  @Output() marcarFavorita = new EventEmitter();

  seleccionar(pelicula: Pelicula){
    this.marcarFavorita.emit({
      pelicula: pelicula
    })
  }
}
