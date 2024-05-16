import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, FormsModule, NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public user:any;
  public campo?: string;
  constructor(){
    this.user= {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }
  public onSubmit(){
    console.log(this.user);
  }
  public hasDadoClick(){
    alert("CLICKY")
  }
  public hasSalido(){
    alert("HAS SALIDO")
  }
  public hasDadoEnter(){
    alert("Has pulsado enter")
  }
}
