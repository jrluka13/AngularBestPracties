import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'roles',
        loadChildren: () => import('src/layouts/admin/pages/roles/roles-page.module').then(m => m.RolesPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('src/layouts/admin/pages/users/users-page.module').then(m => m.UsersPageModule)
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

