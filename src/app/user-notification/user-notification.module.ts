import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { UserNotificationPageRoutingModule } from './user-notification-routing.module';

import { UserNotificationPage } from './user-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserNotificationPageRoutingModule
  ],
  declarations: [UserNotificationPage],
  providers:[
    Geolocation
  ]
})
export class UserNotificationPageModule {}
