import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddcategoryPage } from './admin-addcategory.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddcategoryPageRoutingModule {}
