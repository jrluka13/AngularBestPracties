import { Component } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';

@Component({
  selector: 'roles-eligible',
  templateUrl: 'roles-eligible.component.html',
  styleUrls: ['roles-eligible.component.scss']
})

export class RolesEligibleComponent {
  private _dataIcon = ICONS.BANK;

  constructor() {
  }

  get dataIcon(): ICONS {
    return this._dataIcon;
  }
}
