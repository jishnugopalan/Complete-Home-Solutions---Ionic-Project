import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddcategoryPageRoutingModule } from './admin-addcategory-routing.module';

import { AdminAddcategoryPage } from './admin-addcategory.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AdminAddcategoryPageRoutingModule
  ],
  declarations: [AdminAddcategoryPage]
})
export class AdminAddcategoryPageModule {}
