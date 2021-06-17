import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MockDataTableService } from './services/mock-data-table.service';
import { UserTableComponent } from './components/user-table.component';

@NgModule({
  declarations: [UsersPageComponent, UserTableComponent],
  exports: [UsersPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
  providers: [MockDataTableService]
})

export class UsersPageModule {
}
