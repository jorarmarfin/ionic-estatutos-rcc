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
  getTemas(ini:number, fin:number, page:number=0){
    return this.http.get<Articulos>(`${URL}/temas/${ini}/${fin}/?page=${page}`);
  }
  Buscar(palabra:string,page:number=0){
    return this.http.get<Articulos>(`${URL}/busca-articulos/${palabra}?page=${page}`);
  }


}
