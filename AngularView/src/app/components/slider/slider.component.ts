import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, NgIf , RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() nombre ?: string;
  @Input() size ?: string;
}
