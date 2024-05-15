import { Component } from '@angular/core';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [PeliculasComponent, CommonModule, HomeComponent],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css',
})
export class MiComponenteComponent {
  public mostrarPeli:boolean;
  constructor(){
    this.mostrarPeli=true
  }

  public cambiarPeli(){
    this.mostrarPeli?this.mostrarPeli=false:this.mostrarPeli=true;
  }
}
