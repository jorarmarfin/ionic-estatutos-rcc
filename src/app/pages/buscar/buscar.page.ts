import { Component, OnInit } from '@angular/core';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  data=[];

  constructor(private october:OctoberService) { }

  ngOnInit() {
  }
  buscar(event){
    this.october.Buscar(event.detail.value).subscribe(resp=>{
      this.data = resp.data;
    });
  }

}
