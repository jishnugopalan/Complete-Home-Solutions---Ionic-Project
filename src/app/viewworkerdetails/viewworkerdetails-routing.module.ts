import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewworkerdetailsPage } from './viewworkerdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ViewworkerdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewworkerdetailsPageRoutingModule {}
