import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SidebarComponent, SliderComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public title: string;
  constructor(){
    this.title= "Bienvenido a Formularios"
  }
}
