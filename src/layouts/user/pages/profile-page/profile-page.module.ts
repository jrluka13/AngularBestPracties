import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from 'src/shared/shared.module';
import { CircleProfileComponent } from 'src/layouts/user/pages/profile-page/components/circle-profile/circle-profile.component';
import { CircleCompletedComponent } from 'src/layouts/user/pages/profile-page/components/circle-completed/circle-completed.component';
import { CardSkillsComponent } from 'src/layouts/user/pages/profile-page/components/card-skills/card-skills.component';
import { CardSkillsService } from 'src/layouts/user/pages/profile-page/services/card-skills.service';
import { RolesEligibleComponent } from 'src/layouts/user/pages/profile-page/components/roles-eligible/roles-eligible.component';
import { LeaderBoardComponent } from 'src/layouts/user/pages/profile-page/components/leader-board/leader-board.component';
import { LeaderBoardService } from 'src/layouts/user/pages/profile-page/services/leader-board.service';
import { BadgesComponent } from 'src/layouts/user/pages/profile-page/components/badges/badges.component';
import { BadgesService } from 'src/layouts/user/pages/profile-page/services/badges.service';
import { RouterModule } from '@angular/router';
// import { LibBadgesModule } from 'lib-badges';

@NgModule({
  declarations: [
    ProfilePageComponent,
    CircleProfileComponent,
    CircleCompletedComponent,
    CardSkillsComponent,
    RolesEligibleComponent,
    LeaderBoardComponent,
    BadgesComponent
  ],
  exports: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProfilePageComponent}]),
    SharedModule,
    // LibBadgesModule
  ],
  providers: [CardSkillsService, LeaderBoardService, BadgesService]
})

export class ProfilePageModule {
}
