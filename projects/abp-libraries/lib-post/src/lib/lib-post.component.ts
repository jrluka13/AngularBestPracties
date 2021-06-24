import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

interface Post {
  body: string;
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'post-lib-post',
  templateUrl: './lib-post.component.html',
  styleUrls: ['./lib-post.component.scss'],
})
export class LibPostComponent {
  private _posts: Post;

  @Input()
  set posts(value: Post) {
    this._posts = value;
  }

  get posts(): Post {
    return this._posts;
  }

  @Output() deleteHandler: EventEmitter<number> = new EventEmitter<number>();

  deletePost(post: Post): void {
    this.deleteHandler.emit(post.id);
  }
}
