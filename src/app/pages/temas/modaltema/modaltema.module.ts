import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltemaPageRoutingModule } from './modaltema-routing.module';

import { ModaltemaPage } from './modaltema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltemaPageRoutingModule
  ],
  declarations: [ModaltemaPage]
})
export class ModaltemaPageModule {}
