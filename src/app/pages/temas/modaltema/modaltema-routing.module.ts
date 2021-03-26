import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltemaPage } from './modaltema.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltemaPageRoutingModule {}
