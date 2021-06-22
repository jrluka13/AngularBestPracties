import { Component, Input, OnInit } from '@angular/core';
import { ICONS } from './icons-list';

@Component({
  selector: 'lib-badges-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  private _name: ICONS;
  private _width = '16';
  private _height = '16';
  private _fill = 'fill:#black';


  constructor() {
  }

  @Input()
  set name(value: ICONS) {
    this._name = value;
  }

  get name(): ICONS {
    return this._name;
  }

  @Input()
  set width(value: string) {
    this._width = value;
  }

  get width(): string {
    return this._width;
  }

  @Input()
  set height(value: string) {
    this._height = value;
  }

  get height(): string {
    return this._height;
  }

  @Input()
  set fill(value: string) {
    this._fill = value;
  }

  get fill(): string {
    return this._fill;
  }
  ngOnInit(): void {
  }

}
