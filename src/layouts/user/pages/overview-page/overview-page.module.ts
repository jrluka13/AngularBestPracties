import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page.component';

@NgModule({
  declarations: [OverviewPageComponent],
  exports: [OverviewPageComponent],
  imports: [
    CommonModule
  ]
})

export class OverviewPageModule {
}
