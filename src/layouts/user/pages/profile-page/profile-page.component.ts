import { Component } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { CardSkillsService } from 'src/layouts/user/pages/profile-page/services/card-skills.service';
import { BadgesService } from 'src/layouts/user/pages/profile-page/services/badges.service';
import { DataUserService, Post } from '../../services/data-user.service';
import { CrudPostsService } from './services/crud-posts.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})

export class ProfilePageComponent {
  private _title = 'Profile';

  private _posts: Post[];

  private _home = ICONS.HOME;

  private _add = ICONS.ADD;

  public cards = this.cardSkillsService.getCards();

  public badges = this.badgesService.getBadges();

  constructor(private cardSkillsService: CardSkillsService,
              private badgesService: BadgesService,
              private dataUserService: DataUserService,
              private crudPostsService: CrudPostsService) {
    this.dataUserService.getData()
      .subscribe((posts) => {
        this._posts = posts;
      });
  }

  get homeIcon(): ICONS {
    return this._home;
  }

  get addIcon(): ICONS {
    return this._add;
  }

  get title(): string {
    return this._title;
  }

  get posts(): Post[] {
    return this._posts;
  }

  deletePost(id: number): void {
    this._posts = this.crudPostsService.deletePost(id, this._posts);
  }

  editPost(id: number): void {
    this.crudPostsService.editPost(id);
  }

  addPost(): void {
    this.crudPostsService.addPost(this.posts);
  }
}
