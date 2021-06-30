import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';

@Component({
  selector: 'abp-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatDialogComponent {
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
