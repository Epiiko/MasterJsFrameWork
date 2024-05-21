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
  public id!: any;
  public is_edit:boolean;
 
  constructor(
    private _srvArticle: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url=Global.url
    this.is_edit=true;
   
  }
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this._srvArticle.getArticle(this.id).subscribe(
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
  delete(){
    this._srvArticle.delete(this.id).subscribe(
      respuesta=>{
        console.log("ARTICULO BORRADO");
        console.log(respuesta);
        this._router.navigate(['/home']);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  onSubmit(){
    this._srvArticle.create(this.article).subscribe(
      res=>{
        console.log(res);
        
        if(res.status=='success'){
          this.article=res.article;  
          res.status='succes';
          this._router.navigate(['/blog']);
        }
      },
      err=>{
        console.log(err);
        err.status= 'error'
        
      }
    )
  }
}
