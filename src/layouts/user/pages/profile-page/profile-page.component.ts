import { Component } from '@angular/core';
import { ICONS } from '../../../../shared/components/svg-icon/icons-list';
import { CardSkillsService } from './services/card-skills.service';
import { LeaderBoardService } from './services/leader-board.service';


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


  constructor(private cardSkillsService: CardSkillsService, private leaderBoardService: LeaderBoardService) {
  }

  get homeIcon(): ICONS {
    return this._home;
  }

  get title(): string {
    return this._title;
  }

}
