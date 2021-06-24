import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from 'src/layouts/admin/pages/roles/roles-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RolesPageComponent],
  exports: [RolesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: RolesPageComponent,
    }]),
  ],
})

export class RolesPageModule {
}
