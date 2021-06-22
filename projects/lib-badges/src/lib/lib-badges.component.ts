import { Component } from '@angular/core';
import { BadgesService } from 'projects/lib-badges/src/lib/services/badges.service';
import { Badge } from 'projects/lib-badges/src/lib/services/badges.service';

@Component({
  selector: 'mylib-lib-badges',
  template: `
    <mylib-badges *ngFor="let badge of badges" [badge]="badge"></mylib-badges>
  `,
  styles: []
})
export class LibBadgesComponent {
  private _badges = this.badgesService.getBadges();

  constructor(private badgesService: BadgesService) {
  }

  get badges(): Badge[] {
    return this._badges;
  }

}
