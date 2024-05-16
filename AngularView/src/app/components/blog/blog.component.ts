import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SliderComponent, SidebarComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
 public title: string
  constructor(){
    this.title="Bienvenido al blog"
  }
}
