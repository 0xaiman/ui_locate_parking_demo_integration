import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableParkPage } from './available-park.page';
const routes: Routes = [
  {
    path: '',
    component: AvailableParkPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableParkPageRoutingModule {}
