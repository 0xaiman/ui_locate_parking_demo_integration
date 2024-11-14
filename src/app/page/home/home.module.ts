import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HomeCardComponent } from 'src/app/components/home-card/home-card.component';
import { HomeStoresComponent } from 'src/app/components/home-stores/home-stores.component';
import { HomeParkingStatusComponent } from 'src/app/components/home-parking-status/home-parking-status.component';
import { AvailableParkPageModule } from '../available-park/available-park.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AvailableParkPageModule,
  ],
  declarations: [
    HomePage,
    HomeCardComponent,
    HomeStoresComponent,
    HomeParkingStatusComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
