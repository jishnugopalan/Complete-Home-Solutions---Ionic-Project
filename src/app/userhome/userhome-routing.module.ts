import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserhomePage } from './userhome.page';

const routes: Routes = [
  {
    path: 'userhome',
    component: UserhomePage,
    children: [
      {
        path: 'notification',
        loadChildren: '../notification/notification.module#NotificationPageModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      },
      {
        path: 'mainpage',
        loadChildren: '../mainpage/mainpage.module#MainpagePageModule'
      },
      {
        path: 'chats',
        loadChildren: '../chats/chats.module#ChatsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      {
        path: 'worker',
        loadChildren: '../worker/worker.module#WorkerPageModule'
      },
      {
        path: 'mybookings',
        loadChildren: '../mybookings/mybookings.module#MybookingsPageModule'
      },
      
    ]
  },
  {
    path: "",
    redirectTo: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserhomePageRoutingModule {}
function newFunction(): string {
  return 'userhome/mainpage';
}

