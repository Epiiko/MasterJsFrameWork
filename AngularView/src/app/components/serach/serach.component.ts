import { Component } from '@angular/core';
import { ArticlesComponent } from '../articles/articles.component';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
@Component({
  selector: 'app-serach',
  standalone: true,
  imports: [ArticlesComponent, SliderComponent, SidebarComponent],
  templateUrl: './serach.component.html',
  styleUrl: './serach.component.css',
})
export class SerachComponent {
  public articles!: Article[];
  public serach?:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _srvArticulos: ArticleService
  ) {}
  ngOnInit(): void {
    this._route.params.subscribe((res) => {
      this.serach = res['search'];
      console.log(this.serach);

      this._srvArticulos.search(this.serach).subscribe(
        (res) => {
          if (res.articles) {
            this.articles = res.articles;
          }
        },
        (err) => {
          this.articles = [];
          console.log("No se ha encontrado");
        }
      );
    });
  }
}
