import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }

  getLista(){
    return this.http.get('/assets/data/content.json');
  }
}
