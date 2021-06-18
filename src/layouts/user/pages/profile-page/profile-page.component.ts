import { Component } from '@angular/core';
import { ICONS } from '../../../../shared/components/svg-icon/icons-list';


@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent {
  private _home = ICONS.HOME;

  constructor() {
  }

  get homeIcon(): ICONS {
    return this._home;
  }
}
