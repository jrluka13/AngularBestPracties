import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageModule } from 'src/layouts/user/pages/settings-page/settings-page.module';
import { UserRoutingModule } from 'src/layouts/user/user-routing.module';
import { UserLayoutComponent } from 'src/layouts/user/user-layout.component';
import { SharedModule } from 'src/shared/shared.module';
import { OverviewPageModule } from './pages/overview-page/overview-page.module';


@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    SettingsPageModule,
    OverviewPageModule,
    SharedModule
  ],
})
export class UserModule {
}
