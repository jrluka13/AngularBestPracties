import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [UsersPageComponent],
  exports: [UsersPageComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ]
})

export class UsersPageModule {
}
