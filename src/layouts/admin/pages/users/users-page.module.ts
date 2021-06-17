import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';

@NgModule({
  declarations: [UsersPageComponent],
  exports: [UsersPageComponent],
  imports: [
    CommonModule
  ]
})

export class UsersPageModule {
}
