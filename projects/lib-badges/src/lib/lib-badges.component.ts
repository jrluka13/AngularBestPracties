import { Component, OnInit } from '@angular/core';
import { BadgesService } from './services/badges.service';

@Component({
  selector: 'lib-badges-lib-badges',
  template: `
    <lib-badges-badges *ngFor="let badge of badges" [badge]="badge"></lib-badges-badges>
  `,
  styles: []
})
export class LibBadgesComponent implements OnInit {
  public badges = this.badgesService.getBadges();
  constructor(private badgesService: BadgesService) {
  }

  ngOnInit(): void {
  }

}
