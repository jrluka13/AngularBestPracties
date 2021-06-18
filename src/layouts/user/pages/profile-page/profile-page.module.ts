import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent],
  imports: [
    CommonModule, SharedModule
  ]
})

export class ProfilePageModule {
}
