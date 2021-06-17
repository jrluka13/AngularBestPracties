import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [AdminLayoutComponent, RolesComponent, UsersComponent],
  imports: [],
  providers: [],
})

export class AdminLayoutModule {
}
