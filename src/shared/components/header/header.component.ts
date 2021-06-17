import { Component, Input, OnInit } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _title: string;
  private _logo = ICONS.ANGULAR;
  private _rightIcons = [
    ICONS.SEARCH,
    ICONS.CURSOR,
    ICONS.BELL,
    ICONS.LIST,
  ];

  constructor() {
  }

  get logoIcon(): ICONS {
    return this._logo;
  }

  get rightIcons(): ICONS[] {
    return this._rightIcons;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  ngOnInit(): void {
  }

  iconByName(index: number, name: ICONS): ICONS {
    return name;
  }

}
