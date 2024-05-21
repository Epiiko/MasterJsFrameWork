import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  public article: Article;
  public url: string;
  public pageTitle: string;
  public id: any;
  constructor( private _srvArticle: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router){
    this.article= new Article('','','','',null);
    this.url= Global.url;
    this.pageTitle="Editar Articulo"
  }
  ngOnInit(): void {
   this.getArtcicle();
    
  }
  getArtcicle(){
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
  onSubmit(){
    this._srvArticle.create(this.article).subscribe(
      res=>{
        console.log(res);
        
        if(res.status=='success'){
          this.article=res.article;  
          res.status='succes';
          swal(
            'Articulo edit',
            'El articulo se ha editado correctamente',
            'Success'
          )
          this._router.navigate(['/blog']);
        }
      },
      err=>{
        swal(
          'Edicion Fallida',
          'El articulo se no ha editado correctamente',
          'Error'
        )
        err.status= 'error'
        
      }
    )
  }
}
