import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewjobdetailsPage } from './viewjobdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ViewjobdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewjobdetailsPageRoutingModule {}
