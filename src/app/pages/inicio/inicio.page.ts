import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos';
import { LocalService } from 'src/app/services/local.service';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  lista = [];
  data = [];
  listaF = [];
  articulos:Articulos;
  pagina:number=1;

  constructor(
    private local:LocalService,
    private october:OctoberService) { }

  ngOnInit() {
    
    this.cargarArticulos();

  }
  siguiente(){
    if (this.pagina==this.articulos.last_page) {
      this.pagina = this.articulos.last_page;
    }else{
      this.pagina++;
    }
    this.cargarArticulos();
  }
  anterior(){
    if (this.pagina==1) {
      this.pagina = 1;
    }else{
      this.pagina--;
    }
    this.cargarArticulos();
  }
  cargarArticulos(){
    
    console.log(this.pagina);
    this.october.getArticulos(this.pagina).subscribe(resp=>{
      this.articulos = resp;
      this.data = resp.data;

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
