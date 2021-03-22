import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyworkersPageRoutingModule } from './myworkers-routing.module';

import { MyworkersPage } from './myworkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyworkersPageRoutingModule
  ],
  declarations: [MyworkersPage]
})
export class MyworkersPageModule {}
