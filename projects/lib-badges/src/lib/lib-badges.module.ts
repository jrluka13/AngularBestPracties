import { NgModule } from '@angular/core';
import { LibBadgesComponent } from 'projects/lib-badges/src/lib/lib-badges.component';
import { BadgesComponent } from 'projects/lib-badges/src/lib/badges/badges.component';
import { SvgIconComponent } from 'projects/lib-badges/src/lib/shared/svg-icon/svg-icon.component';
import { BadgesService } from 'projects/lib-badges/src/lib/services/badges.service';
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
