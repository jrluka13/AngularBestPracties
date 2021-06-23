import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent {
  constructor(private router: Router) {
  }

  redirectToOverview(): void {
    this.router.navigate(['user/overview']);
  }
}
