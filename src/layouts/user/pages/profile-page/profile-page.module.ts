import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent],
  imports: [
    CommonModule
  ]
})

export class ProfilePageModule{}
