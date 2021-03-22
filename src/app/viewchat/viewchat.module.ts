import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewchatPageRoutingModule } from './viewchat-routing.module';

import { ViewchatPage } from './viewchat.page';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewchatPageRoutingModule,
    AutosizeModule

  ],

  declarations: [ViewchatPage]
})
export class ViewchatPageModule {}
