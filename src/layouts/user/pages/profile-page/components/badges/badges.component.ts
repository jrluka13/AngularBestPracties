import { Component, Input } from '@angular/core';
import { Badge } from 'src/layouts/user/pages/profile-page/services/badges.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})

export class BadgesComponent {
  private _badge;

  constructor() {
  }

  @Input()
  set badge(value: Badge) {
    this._badge = value;
  }

  get badge(): Badge {
    return this._badge;
  }


}
