import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './roles-page.component';

@NgModule({
  declarations: [RolesPageComponent],
  exports: [RolesPageComponent],
  imports: [
    CommonModule
  ]
})

export class RolesPageModule {
}
