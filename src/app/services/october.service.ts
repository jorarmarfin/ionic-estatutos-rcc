import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Articulos } from '../interfaces/articulos';

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class OctoberService {

  pagina : number = 0;

  constructor(private http:HttpClient) { }
  getArticulos(page:number){
    return this.http.get<Articulos>(`${URL}/articulos?page=${page}`);
  }
  // getYoutube(inicio:string,categoria: string){

  //   if (inicio==='si') {
  //     this.pagina = 1;
  //   } else {
  //     this.pagina++;
  //   }
  //   return this.http.get<RespuestaOctober>(`${URL}/youtube/${categoria}?page=${this.pagina}`);
  // }
}
