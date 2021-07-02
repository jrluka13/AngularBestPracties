import { Component, Input } from '@angular/core';
import { Badge } from '../services/badges.service';

@Component({
  selector: 'mylib-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})

export class BadgesComponent {
  private _badge;

  @Input()
  set badge(value: Badge) {
    this._badge = value;
  }

  get badge(): Badge {
    return this._badge;
  }
}
