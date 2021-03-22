import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewworkerdetailsPageRoutingModule } from './viewworkerdetails-routing.module';

import { ViewworkerdetailsPage } from './viewworkerdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewworkerdetailsPageRoutingModule
  ],
  declarations: [ViewworkerdetailsPage]
})
export class ViewworkerdetailsPageModule {}
