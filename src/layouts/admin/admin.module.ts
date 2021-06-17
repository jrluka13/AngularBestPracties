import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { RolesPageModule } from './pages/roles/roles-page.module';
import { UsersPageModule } from './pages/users/users-page.module';
import { SharedModule } from '../../shared/shared.module';

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
