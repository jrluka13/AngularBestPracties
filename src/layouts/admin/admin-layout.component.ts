import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  title = 'Angular Best Practices';
  constructor() {
  }

  ngOnInit(): void {
  }

}