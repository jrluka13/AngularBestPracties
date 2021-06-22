import { NgModule } from '@angular/core';
import { LibBadgesComponent } from './lib-badges.component';
import { BadgesComponent } from './badges/badges.component';
import { SvgIconComponent } from './shared/svg-icon/svg-icon.component';
import { BadgesService } from './services/badges.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LibBadgesComponent, BadgesComponent, SvgIconComponent],
  imports: [
    CommonModule
  ],
  exports: [LibBadgesComponent],
  providers: [BadgesService]
})
export class LibBadgesModule {
}
