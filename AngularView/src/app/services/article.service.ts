import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClientModule } from '@angular/common/http';
import { Global } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public url: string;
  constructor(private readonly _http: HttpClient) {
    this.url=Global.url
  }
  pruebas(){
    return "SOY EL SERVICIO ARTICULOS"
  }
  
  getArticles(last: any = null):Observable<any>{
    var articles="articles";
    if(last!=null){
      var articles="articles/"+ last;
    }   
    return this._http.get(this.url + articles);
  }
  getArticle(articleId: any):Observable<any>{
    return this._http.get(this.url + 'article/' + articleId)
  }
}
