import { Injectable } from '@angular/core';

export interface PeriodicElement {
  email: string;
  role: string;
  active: boolean;
}

@Injectable()
export class MockDataTableService {
  private ELEMENT_DATA: PeriodicElement[] = [
    { email: 'vlad@mail.ru', role: 'admin', active: true },
    { email: 'lvfb@mail.ru', role: 'user', active: true },
    { email: 'lvds23@mail.ru', role: 'user', active: false },
  ];

  getData(): PeriodicElement[] {
    return this.ELEMENT_DATA;
  }
}
