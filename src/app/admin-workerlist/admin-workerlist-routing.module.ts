import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminWorkerlistPage } from './admin-workerlist.page';

const routes: Routes = [
  {
    path: '',
    component: AdminWorkerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWorkerlistPageRoutingModule {}
