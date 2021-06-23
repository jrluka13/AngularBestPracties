import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from 'src/layouts/user/user-layout.component';
import { ProfilePageComponent } from 'src/layouts/user/pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'settings',
        loadChildren: () => import('src/layouts/user/pages/settings-page/settings-page.module').then((m) => m.SettingsPageModule),
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        // eslint-disable-next-line max-len
        // loadChildren: () => import('src/layouts/user/pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('src/layouts/user/pages/overview-page/overview-page.module').then((m) => m.OverviewPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
