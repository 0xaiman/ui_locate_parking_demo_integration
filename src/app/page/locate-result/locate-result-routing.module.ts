import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocateResultPage } from './locate-result.page';

const routes: Routes = [
  {
    path: '',
    component: LocateResultPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocateResultPageRoutingModule {}
