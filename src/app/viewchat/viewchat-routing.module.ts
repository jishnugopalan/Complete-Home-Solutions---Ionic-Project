import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewchatPage } from './viewchat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewchatPageRoutingModule {}
