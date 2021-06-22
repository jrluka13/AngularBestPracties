import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CircleProfileComponent } from './components/circle-profile/circle-profile.component';
import { CircleCompletedComponent } from './components/circle-completed/circle-completed.component';
import { CardSkillsComponent } from './components/card-skills/card-skills.component';
import { CardSkillsService } from './services/card-skills.service';
import { RolesEligibleComponent } from './components/roles-eligible/roles-eligible.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { LeaderBoardService } from './services/leader-board.service';
import { BadgesComponent } from './components/badges/badges.component';
import { BadgesService } from './services/badges.service';
import { LibBadgesModule } from 'lib-badges';

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
    CommonModule, SharedModule, LibBadgesModule
  ],
  providers: [CardSkillsService, LeaderBoardService, BadgesService]
})

export class ProfilePageModule {
}
