import { Component, OnInit } from '@angular/core';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  titulo:string;
  contenido:string;
  constructor(private october:OctoberService) { }

  ngOnInit() {
    this.october.getPost(1).subscribe(resp=>{
      this.titulo = resp.nombre;
      this.contenido = resp.contenido;
    });
  }

}
