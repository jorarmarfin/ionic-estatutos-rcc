import { Component, OnInit } from '@angular/core';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  titulo:string;
  contenido:string;
  constructor(private october:OctoberService) { }

  ngOnInit() {
    this.october.getPost(2).subscribe(resp=>{
      this.titulo = resp.nombre;
      this.contenido = resp.contenido;
    });
  }

}
