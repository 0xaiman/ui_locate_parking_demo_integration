import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  exports: [MainComponent],
})
export class MainModule {}
