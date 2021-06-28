import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../../layouts/user/services/data-user.service';
import { ICONS } from '../svg-icon/icons-list';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent implements OnInit {
  private _close = ICONS.CLOSE;

  public title;

  public text;

  public titleEdit;

  public textEdit;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    if (data.type === 'edit') {
      this.titleEdit = data.post.title;
      this.textEdit = data.post.body;
    }
  }

  ngOnInit(): void {
    console.log(this.data.posts);
  }

  get close(): ICONS {
    return this._close;
  }

  addPost(): void {
    this.data.posts.push({
      title: this.title,
      body: this.text,
    });
  }

  deletePost(): void {
  }

  editPost(): void {

  }
}
