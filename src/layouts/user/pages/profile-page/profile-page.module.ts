import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { CircleProfileComponent } from 'src/layouts/user/pages/profile-page/components/circle-profile/circle-profile.component';
import { CircleCompletedComponent } from 'src/layouts/user/pages/profile-page/components/circle-completed/circle-completed.component';
import { CardSkillsComponent } from 'src/layouts/user/pages/profile-page/components/card-skills/card-skills.component';
import { CardSkillsService } from 'src/layouts/user/pages/profile-page/services/card-skills.service';
import { RolesEligibleComponent } from 'src/layouts/user/pages/profile-page/components/roles-eligible/roles-eligible.component';
import { BadgesService } from 'src/layouts/user/pages/profile-page/services/badges.service';
import { RouterModule } from '@angular/router';
import { LibBadgesModule } from 'lib-badges';
import { ProfilePageComponent } from './profile-page.component';
import { LibPostModule } from '../../../../../projects/abp-libraries/lib-post/src/lib/lib-post.module';
import { CrudPostsService } from './services/crud-posts.service';

@NgModule({
  declarations: [
    ProfilePageComponent,
    CircleProfileComponent,
    CircleCompletedComponent,
    CardSkillsComponent,
    RolesEligibleComponent,
  ],
  exports: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }]),
    SharedModule,
    LibBadgesModule,
    LibPostModule,
  ],
  providers: [CardSkillsService, CrudPostsService, BadgesService],
})

export class ProfilePageModule {
}
