import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindMyCarPage } from './find-my-car.page';

const routes: Routes = [
  {
    path: '',
    component: FindMyCarPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindMyCarPageRoutingModule {}
