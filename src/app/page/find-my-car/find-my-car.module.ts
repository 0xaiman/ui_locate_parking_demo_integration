import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindMyCarPageRoutingModule } from './find-my-car-routing.module';
import { FindMyCarPage } from './find-my-car.page';
import { FmcCardComponent } from 'src/app/components/fmc-card/fmc-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FindMyCarPageRoutingModule],
  declarations: [FindMyCarPage, FmcCardComponent],
})
export class FindMyCarPageModule {}
