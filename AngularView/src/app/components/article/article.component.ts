import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Global } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf, CommonModule, SliderComponent, SidebarComponent, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  public article!: Article;
  public url: string;
  constructor(
    private _srvArticle: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url=Global.url
  }
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params['id'];
      console.log(id);
      this._srvArticle.getArticle(id).subscribe(
        (resp) => {
            this.article=resp.articuloSearched[0];
        },
        (err) => {
          console.log(err);
          this._router.navigate(['/home']);
        }
      );
    });
  }
}
