import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemasPage } from './temas.page';

const routes: Routes = [
  {
    path: '',
    component: TemasPage
  },
  {
    path: 'modaltema',
    loadChildren: () => import('./modaltema/modaltema.module').then( m => m.ModaltemaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemasPageRoutingModule {}
