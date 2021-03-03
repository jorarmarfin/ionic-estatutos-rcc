import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  lista = [];
  listaF = [];

  constructor(private local:LocalService) { }

  ngOnInit() {
    this.local.getLista().subscribe((resp:any)=>{
      this.lista = resp;
      console.log(resp);
    });


  }
  buscar(){
    this.local.getLista().subscribe((resp:any)=>{
      this.lista = resp;
      this.lista.forEach(element => {
        if (element.nivel=0) {
          this.listaF.push(element);
        }
      });
      for (let index = 0; index < this.lista.length; index++) {
        if (this.lista[index].nivel==0) {
          this.listaF.push(this.lista[index]);
        }
       
      }
      
      console.log(this.listaF);
    });
  }


}
