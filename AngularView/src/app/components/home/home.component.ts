import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SliderComponent } from '../slider/slider.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, SliderComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public title: string;
  public articles!: Article[];
  constructor(private readonly _srvArticle: ArticleService){
    this.title="Últimos Articulos";
  }
  ngOnInit(): void {
    this._srvArticle.getArticles(5).subscribe(
      (response) => {
        if (response.articles) this.articles = response.articles;
      },
      (error) => {
        console.log(error);
      }
    )
    
  }
}
