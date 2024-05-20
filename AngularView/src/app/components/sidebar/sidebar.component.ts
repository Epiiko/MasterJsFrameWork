import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  public searchString?:string;
  constructor( private _srvArticle: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router){
  }
  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
  }
}
