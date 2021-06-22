import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from 'src/layouts/admin/pages/users/users-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MockDataTableService } from 'src/layouts/admin/pages/users/services/mock-data-table.service';
import { UserTableComponent } from 'src/layouts/admin/pages/users/components/user-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersPageComponent, UserTableComponent],
  exports: [UsersPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    RouterModule.forChild([{
      path: '', component: UsersPageComponent
    }])
  ],
  providers: [MockDataTableService]
})

export class UsersPageModule {
}
