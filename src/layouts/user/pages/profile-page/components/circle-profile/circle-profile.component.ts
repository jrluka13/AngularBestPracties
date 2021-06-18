import { Component } from '@angular/core';
import { ICONS } from '../../../../../../shared/components/svg-icon/icons-list';

@Component({
  selector: 'circle-profile',
  templateUrl: './circle-profile.component.html',
  styleUrls: ['./circle-profile.component.scss']
})

export class CircleProfileComponent{
  private _user = ICONS.USER;

  constructor() {
  }

  get userIcon(): ICONS {
    return this._user;
  }
}
