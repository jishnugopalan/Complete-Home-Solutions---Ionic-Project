import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyworkersPage } from './myworkers.page';

const routes: Routes = [
  {
    path: '',
    component: MyworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyworkersPageRoutingModule {}
