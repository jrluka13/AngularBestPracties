import { Component } from '@angular/core';
import { BadgesService, Badge } from './services/badges.service';

@Component({
  selector: 'mylib-lib-badges',
  template: `
    <mylib-badges *ngFor="let badge of badges" [badge]="badge"></mylib-badges>
  `,
})
export class LibBadgesComponent {
  private _badges = this.badgesService.getBadges();

  constructor(private badgesService: BadgesService) {
  }

  get badges(): Badge[] {
    return this._badges;
  }
}
