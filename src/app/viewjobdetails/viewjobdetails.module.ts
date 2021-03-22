import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { ViewjobdetailsPageRoutingModule } from './viewjobdetails-routing.module';

import { ViewjobdetailsPage } from './viewjobdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewjobdetailsPageRoutingModule
  ],
  declarations: [ViewjobdetailsPage],
  providers:[
    Geolocation
  ]
})
export class ViewjobdetailsPageModule {}
