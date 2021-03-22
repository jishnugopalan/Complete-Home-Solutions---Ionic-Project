import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminFeedbacksPage } from './admin-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: AdminFeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFeedbacksPageRoutingModule {}
