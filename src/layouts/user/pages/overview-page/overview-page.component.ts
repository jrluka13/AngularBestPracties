import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectToSetting(): void {
    this.router.navigate(['./settings']);
  }
}
