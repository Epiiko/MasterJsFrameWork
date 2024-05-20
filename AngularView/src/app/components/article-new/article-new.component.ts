import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global.service';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css'
})
export class ArticleNewComponent {
  public article: Article;
  public url: string;
  constructor( private _srvArticle: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router){
    this.article= new Article('','','','',null);
    this.url= Global.url;
  }
  ngOnInit(): void {

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
