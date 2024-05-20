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
    return this._http.get(this.url + 'article/' + articleId);
  }
  search(searchString:string):Observable<any>{
    return this._http.get(this.url + 'search/' + searchString);
  }
  create(article:any):Observable<any>{
    //pasamos el articulo a un string y lo guardamos en params
    let params = JSON.stringify(article);
    //indicamos el tipo de datos que va a recibir el objeto
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.post(this.url + 'save', params , {headers: headers})
  }
  update(id:any, article:any):Observable<any>{
    let params = JSON.stringify(Article);
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+ "article/" +id,  params, {headers:headers} )
  }
  delete(id:any):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url+ "delete/" + id, {headers:headers});
  }
}
