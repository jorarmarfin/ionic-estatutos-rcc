import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OctoberService } from 'src/app/services/october.service';

@Component({
  selector: 'app-modaltema',
  templateUrl: './modaltema.page.html',
  styleUrls: ['./modaltema.page.scss'],
})
export class ModaltemaPage implements OnInit {

  @Input() Tema:{
    title:string,
    ini:number,
    fin:number,
    clase?:string,
  };
  data = [];


  constructor(
    private modalCtrl:ModalController,
    private october:OctoberService
    ) { }

  ngOnInit() {
    this.october.getTemas(this.Tema.ini,this.Tema.fin).subscribe(resp=>{
        this.data = resp.data;
    });
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }

}
