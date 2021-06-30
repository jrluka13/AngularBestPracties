import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/layouts/user/services/data-user.service';
import { MatDialogComponent } from 'src/shared/components/mat-dialog/mat-dialog.component';

@Injectable()

export class CrudPostsService {
  constructor(private dialog: MatDialog) {
  }

  editPost(post: Post): void {
    this.dialog.open(MatDialogComponent, { data: { post, type: 'edit' } });
  }

  deletePost(post: Post): void {
    this.dialog.open(MatDialogComponent, { data: { post, type: 'delete' } });
  }

  addPost(posts: Post[]): void {
    this.dialog.open(MatDialogComponent, { data: { posts, type: 'add' } }).afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
