import { Component, Input } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { Board } from 'src/layouts/user/pages/profile-page/services/leader-board.service';

@Component({
  selector: 'leader-board',
  templateUrl: 'leader-board.component.html',
  styleUrls: ['leader-board.component.scss']
})

export class LeaderBoardComponent {
  private _dataIcon = ICONS.BANK;
  private _li: Board;
  private _ind: number;

  constructor() {
  }

  @Input()
  set li(value: Board) {
    this._li = value;
  }

  get li(): Board {
    return this._li;
  }

  @Input()
  set ind(value: number) {
    this._ind = value;
  }

  get ind(): number {
    return this._ind;
  }

  get dataIcon(): ICONS {
    return this._dataIcon;
  }
}
