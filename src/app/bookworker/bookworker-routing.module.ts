import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookworkerPage } from './bookworker.page';

const routes: Routes = [
  {
    path: '',
    component: BookworkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookworkerPageRoutingModule {}
