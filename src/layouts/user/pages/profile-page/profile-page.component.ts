import { Component } from '@angular/core';
import { ICONS } from '../../../../shared/components/svg-icon/icons-list';
import { CardSkillsService } from './services/card-skills.service';
import { LeaderBoardService } from './services/leader-board.service';
import { BadgesService } from './services/badges.service';


@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent {
  private _title = 'Profile';
  private _home = ICONS.HOME;
  public cards = this.cardSkillsService.getCards();
  public lists = this.leaderBoardService.getList();
  public badges = this.badgesService.getBadges();


  constructor(private cardSkillsService: CardSkillsService,
              private leaderBoardService: LeaderBoardService,
              private badgesService: BadgesService) {}

  get homeIcon(): ICONS {
    return this._home;
  }

  get title(): string {
    return this._title;
  }

}
