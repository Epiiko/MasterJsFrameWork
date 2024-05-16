import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  constructor() { }

  holaMundo(){
    return "HOLA MUNDO PERRO";
  }
}
