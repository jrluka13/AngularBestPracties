import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { RolesPageComponent } from './pages/roles/roles-page.component';
import { UsersPageComponent } from './pages/users/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'roles',
        component: RolesPageComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

