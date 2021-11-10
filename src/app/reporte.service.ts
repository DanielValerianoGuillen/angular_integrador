import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private uri = 'http://' + window.location.hostname + ':5000/api/v1';
  constructor(
    private http: HttpClient
  ) { }

  public save(reporte: any) {
    return this.http.post(this.uri + '/posts', reporte);
  }
  public addComment(idPost: any,comentario: any){
    return this.http.post(this.uri + '/posts/' + idPost + '/addcomment',comentario);
  }
  public findAll(){
    return this.http.get<any>(this.uri + '/posts/');
  }

  public find(idPost: any){
    return this.http.get<any>(this.uri + '/post/' + idPost);
  }
}
