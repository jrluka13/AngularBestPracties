import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from 'src/layouts/admin/admin-layout.component';
import { AdminRoutingModule } from 'src/layouts/admin/admin-routing.module';
import { CommonModule } from '@angular/common';
import { RolesPageModule } from 'src/layouts/admin/pages/roles/roles-page.module';
import { UsersPageModule } from 'src/layouts/admin/pages/users/users-page.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RolesPageModule,
    UsersPageModule,
    SharedModule
  ],
  providers: [],
})

export class AdminModule {
}
