import { Component } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { CardSkillsService } from 'src/layouts/user/pages/profile-page/services/card-skills.service';
import { LeaderBoardService } from 'src/layouts/user/pages/profile-page/services/leader-board.service';
import { BadgesService } from 'src/layouts/user/pages/profile-page/services/badges.service';
import { DataUserService, Post } from '../../services/data-user.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})

export class ProfilePageComponent {
  private _title = 'Profile';

  private _posts: Post[];

  private _home = ICONS.HOME;

  public cards = this.cardSkillsService.getCards();

  public lists = this.leaderBoardService.getList();

  public badges = this.badgesService.getBadges();

  constructor(private cardSkillsService: CardSkillsService,
              private leaderBoardService: LeaderBoardService,
              private badgesService: BadgesService,
              private dataUserService: DataUserService) {
    this.dataUserService.getData()
      .subscribe((posts) => {
        this._posts = posts;
      });
  }

  get homeIcon(): ICONS {
    return this._home;
  }

  get title(): string {
    return this._title;
  }

  get posts(): Post[] {
    return this._posts;
  }

  deletePost(id: number): void {
    this._posts = this._posts.filter((post) => post.id !== id);
  }
}
