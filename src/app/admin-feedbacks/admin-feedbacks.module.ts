import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFeedbacksPageRoutingModule } from './admin-feedbacks-routing.module';

import { AdminFeedbacksPage } from './admin-feedbacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminFeedbacksPageRoutingModule
  ],
  declarations: [AdminFeedbacksPage]
})
export class AdminFeedbacksPageModule {}
