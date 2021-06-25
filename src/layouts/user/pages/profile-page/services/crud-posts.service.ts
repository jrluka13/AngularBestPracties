import { Injectable } from '@angular/core';
import { Post } from '../../../services/data-user.service';

@Injectable()

export class CrudPostsService {
  editPost(id: number): void {
    console.log('edit icon clicked', id);
  }

  deletePost(id: number, posts: Post[]): Post[] {
    return posts.filter((post) => post.id !== id);
  }

  addPost(posts: Post[]): void {
    console.log('add icon clicked', posts);
  }
}
