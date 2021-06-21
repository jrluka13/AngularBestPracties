import { Component, Input } from '@angular/core';
import { ICONS } from '../../../../../../shared/components/svg-icon/icons-list';
import { Badge } from '../../services/badges.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})

export class BadgesComponent {
  private _badge;
  v = ICONS.BICYCLE;

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
