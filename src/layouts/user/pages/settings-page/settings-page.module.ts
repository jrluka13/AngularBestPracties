import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from 'src/layouts/user/pages/settings-page/settings-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SettingsPageComponent],
  exports: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([
      {path: '', component: SettingsPageComponent}
    ])
  ]
})

export class SettingsPageModule {
}
