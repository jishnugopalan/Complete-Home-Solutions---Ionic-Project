import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNotificationPage } from './user-notification.page';

const routes: Routes = [
  {
    path: '',
    component: UserNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserNotificationPageRoutingModule {}
