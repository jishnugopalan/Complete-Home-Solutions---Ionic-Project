import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { BookworkerPageRoutingModule } from './bookworker-routing.module';

import { BookworkerPage } from './bookworker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookworkerPageRoutingModule
  ],
  declarations: [BookworkerPage],
  providers:[
    Geolocation
  ]
})
export class BookworkerPageModule {}
