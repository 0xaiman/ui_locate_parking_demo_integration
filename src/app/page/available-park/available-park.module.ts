import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvailableParkPageRoutingModule } from './available-park-routing.module';
import { AvailableParkPage } from './available-park.page';
import { ApCardComponent } from 'src/app/components/ap-card/ap-card.component';
import { ApStatusComponent } from 'src/app/components/ap-status/ap-status.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableParkPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [AvailableParkPage, ApStatusComponent, ApCardComponent],
})
export class AvailableParkPageModule {}
