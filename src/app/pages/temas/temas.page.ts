import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaltemaPage } from './modaltema/modaltema.page';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {
  public Temas=[
    { title: 'I. De la definición y fines', ini:1 , fin:7 },
    { title: '1. Definición y Principios como Movimiento Catolico en el Mundo',clase:'p-l-20', ini:1 , fin:1 },
    { title: '2. Denominacion Social en el Perú',clase:'p-l-20', ini:2 , fin:7 },
    { title: '3. De los fines principales de la RCC-Perú',clase:'p-l-20', ini:8 , fin:8 },
    { title: '4. De la misión de la RCC-Perú',clase:'p-l-20', ini:9 , fin:9 },
    { title: '5. De los elementos característicos de la RCC-Perú',clase:'p-l-20', ini:10 , fin:10 },
    { title: '6. De las expresiones de la RCC-Perú',clase:'p-l-20', ini:11 , fin:11 },
    { title: '7. De los miembros de la RCC-Perú',clase:'p-l-20', ini:12 , fin:15 },
    { title: 'II. De la Organizacion', ini:1 , fin:3 },
    { title: '1. Objetivos del estatuto',clase:'p-l-20', ini:16 , fin:16 },
    { title: '2. De la estructura orgánica',clase:'p-l-20', ini:17 , fin:18 },
    { title: '2.1. De los Grupos de Oración',clase:'p-l-40', ini:19 , fin:22 },
    { title: '2.1.1 De los Servidores',clase:'p-l-60', ini:23 , fin:27 },
    { title: '2.1.2 Del Responsable del Grupo de Oración',clase:'p-l-60', ini:28 , fin:31 },
    { title: '2.1.3 Del Asesor del Grupo de Oración',clase:'p-l-60', ini:32 , fin:32 },
    { title: '2.2 De la Coordinación de la RCC-PERÚ Zonal',clase:'p-l-40', ini:33 , fin:33 },
    { title: '2.2.1 Del Coordinador y Sub Coordinador de la RCC-PERÚ Zonal',clase:'p-l-60', ini:34 , fin:37 },
    { title: '2.3 De las Coordinaciones de la RCC-PERÚ en las Diócesis, Prelaturas o Vicariatos Apostólicos',clase:'p-l-40', ini:38 , fin:39 },
    { title: '2.3.1 Del Coordinador y Sub Coordinador de la RCC-PERÚ Diocesano',clase:'p-l-60', ini:40 , fin:43 },
    { title: '2.3.2 De los Ministerios Diocesanos de Servicio',clase:'p-l-60', ini:44 , fin:46 },
    { title: '2.3.3 Del Sacerdote Asesor Diocesano',clase:'p-l-60', ini:47 , fin:48 },
    { title: '2.3.4 De la Oficina Diocesana',clase:'p-l-60', ini:49 , fin:50 },
    { title: '2.4 De la Coordinación Nacional y la Junta Nacional Artículo',clase:'p-l-40', ini:51 , fin:56 },
    { title: '2.4.1 Del Coordinador y Sub Coordinador Nacional',clase:'p-l-60', ini:57 , fin:65 },
    { title: '2.4.2 De los Ministerios Nacionales de Servicio (Línea de Acción Nacional)',clase:'p-l-60', ini:66 , fin:68 },
    { title: '2.4.2.1 Del Encargado del Ministerio Nacional de Servicio',clase:'p-l-80', ini:69 , fin:69 },
    { title: '2.4.3 De la Oficina Nacional',clase:'p-l-60', ini:70 , fin:71 },
    { title: 'III. De las Comunidades Carismáticas', ini:72 , fin:72 },
    { title: '3.1 De las Comunidades Carismáticas de Alianza',clase:'p-l-40', ini:73 , fin:74 },
    { title: '3.2 De las Comunidades Carismáticas de Vida',clase:'p-l-40', ini:75 , fin:75 },
    { title: '3.3 Del Patrimonio de las Comunidades',clase:'p-l-40', ini:76 , fin:78 },
    { title: 'IV. Patrimonio', ini:79 , fin:82 },
    { title: 'V. De los servicios de creación, Difusión y propagación de los Materiales de la RCC Perú', ini:83 , fin:84 },
    { title: 'VI. De las Organizaciones Promotoras de la Evangelización RCC Perú', ini:85 , fin:88 },
    { title: 'VII. Disolución y Liquidación de la asociación RCC Perú', ini:89 , fin:90 },
    { title: 'VII. Disposiciones Finales', ini:91 , fin:96 },
  ];
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async presentModal(i:number) {
    let Tema = this.Temas[i];
    const modal = await this.modalCtrl.create({
      component: ModaltemaPage,
      componentProps: {
        'Tema': Tema
      }
    });
    return await modal.present();
  }

}
