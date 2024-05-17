import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { CommonModule, NgFor } from '@angular/common';
import { Global } from '../../services/global.service';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, NgFor, CommonModule,ArticlesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  public url: string;
  public title: string;
  public articles!: Article[];
  constructor(private _srvArticle: ArticleService) {
    this.title = 'Bienvenido al blog';
    this.url=Global.url;
  }
  ngOnInit(): void {
      this._srvArticle.getArticles().subscribe(
        (response) => {
          if (response.articles) this.articles = response.articles;
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
