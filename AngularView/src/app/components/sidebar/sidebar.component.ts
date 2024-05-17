import { Component } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { Article } from '../../models/article';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
}
