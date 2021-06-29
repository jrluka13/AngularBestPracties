import { Component, OnDestroy } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { CardSkillsService } from 'src/layouts/user/pages/profile-page/services/card-skills.service';
import { BadgesService } from 'src/layouts/user/pages/profile-page/services/badges.service';
import { Subscription } from 'rxjs';
import { DataUserService, Post } from '../../services/data-user.service';
import { CrudPostsService } from './services/crud-posts.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})

export class ProfilePageComponent implements OnDestroy {
  private _title = 'Profile';

  private _posts: Post[];

  sub: Subscription;

  private _home = ICONS.HOME;

  private _add = ICONS.ADD;

  public cards = this.cardSkillsService.getCards();

  public badges = this.badgesService.getBadges();

  constructor(private cardSkillsService: CardSkillsService,
              private badgesService: BadgesService,
              private dataUserService: DataUserService,
              private crudPostsService: CrudPostsService) {
    this.sub = this.dataUserService.getData()
      .subscribe((posts) => {
        this._posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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

  deletePost(post: Post): void {
    this.crudPostsService.deletePost(post);
  }

  editPost(post: Post): void {
    this.crudPostsService.editPost(post);
  }

  addPost(): void {
    this.crudPostsService.addPost(this.posts);
  }

  postByTitle(index, post): string {
    return post.title;
  }
}
