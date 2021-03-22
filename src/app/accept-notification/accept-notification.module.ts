import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptNotificationPageRoutingModule } from './accept-notification-routing.module';

import { AcceptNotificationPage } from './accept-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptNotificationPageRoutingModule
  ],
  declarations: [AcceptNotificationPage]
})
export class AcceptNotificationPageModule {}
