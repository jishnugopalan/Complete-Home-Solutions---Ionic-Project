import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkeraccountPageRoutingModule } from './workeraccount-routing.module';

import { WorkeraccountPage } from './workeraccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkeraccountPageRoutingModule
  ],
  declarations: [WorkeraccountPage]
})
export class WorkeraccountPageModule {}
