import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminWorkerlistPageRoutingModule } from './admin-workerlist-routing.module';

import { AdminWorkerlistPage } from './admin-workerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminWorkerlistPageRoutingModule
  ],
  declarations: [AdminWorkerlistPage]
})
export class AdminWorkerlistPageModule {}
