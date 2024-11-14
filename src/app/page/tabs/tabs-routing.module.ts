import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'find-my-car',
        loadChildren: () =>
          import('../find-my-car/find-my-car.module').then(
            (m) => m.FindMyCarPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'available-park',
        loadChildren: () =>
          import('../available-park/available-park.module').then(
            (m) => m.AvailableParkPageModule
          ),
      },
      {
        path: 'locate-result',
        loadChildren: () =>
          import('../locate-result/locate-result.module').then(
            (m) => m.LocateResultPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
