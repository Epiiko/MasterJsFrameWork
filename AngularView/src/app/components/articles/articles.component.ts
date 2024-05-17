import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Global } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  @Input() articles!: Article[];
  public url:string;
  constructor(){
    this.url=Global.url
  }
}
