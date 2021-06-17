import { Component } from '@angular/core';

export interface PeriodicElement {
  email: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {email: 'vlad@mail.ru', role: 'admin'},
  {email: 'lvfb@mail.ru', role: 'user'},
  {email: 'lvds23@mail.ru', role: 'user'},
];

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  displayedColumns: string[] = ['email', 'role'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }


}
