import { NgIf } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [NgIf, SidebarComponent, SliderComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css',
})
export class PaginaComponent {
  
  public title: string;
  public nombre?: string;
  public apellido?: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Pagina de pruebas';
  }
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre=params['nombre'];
      this.apellido=params['apellido'];
      console.log(this.nombre);
      
    });
  }
  public redireccion(){
    this._router.navigate(['/pagina', 'Nacho', 'Diaz']);
  }
}
