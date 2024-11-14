import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocateResultPageRoutingModule } from './locate-result-routing.module';

import { LocateResultPage } from './locate-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocateResultPageRoutingModule,
  ],
  declarations: [LocateResultPage],
})
export class LocateResultPageModule {}
