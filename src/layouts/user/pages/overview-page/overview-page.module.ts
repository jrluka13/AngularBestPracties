import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from 'src/layouts/user/pages/overview-page/overview-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OverviewPageComponent],
  exports: [OverviewPageComponent],
  imports: [
    CommonModule, RouterModule.forChild([{
      path: '', component: OverviewPageComponent,
    }]),
  ],
})

export class OverviewPageModule {
}
