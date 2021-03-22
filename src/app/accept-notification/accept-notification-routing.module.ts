import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptNotificationPage } from './accept-notification.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptNotificationPageRoutingModule {}
