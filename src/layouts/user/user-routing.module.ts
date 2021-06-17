import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from 'src/layouts/user/pages/settings-page/settings-page.component';
import { UserLayoutComponent } from 'src/layouts/user/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

