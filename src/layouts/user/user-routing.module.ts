import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from 'src/layouts/user/pages/settings-page/settings-page.component';
import { UserLayoutComponent } from 'src/layouts/user/user-layout.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      {
        path: 'overview',
        component: OverviewPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

