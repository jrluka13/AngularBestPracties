import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
})
export class OverviewPageComponent {
  constructor(private router: Router) {
  }

  redirectToSetting(): void {
    this.router.navigate(['user/settings']);
  }
}
