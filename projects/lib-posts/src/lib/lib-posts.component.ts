import { Component, Input } from '@angular/core';

interface Post {
  body: string;
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'posts-lib-posts',
  templateUrl: './lib-posts.component.html',
  styleUrls: ['./lib-posts.component.scss'],
})
export class LibPostsComponent {
  private _posts: Post;

  @Input()
  set posts(value: Post) {
    this._posts = value;
  }

  get posts(): Post {
    return this._posts;
  }
}
