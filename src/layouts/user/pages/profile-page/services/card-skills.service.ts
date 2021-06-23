import { Injectable } from '@angular/core';

export interface Card {
  title: string;
  date: Date;
}

@Injectable()

export class CardSkillsService {
  private _cards: Card[] = [
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
    {
      title: 'IoT Development Platf orm Advan',
      date: new Date(),
    },
  ];

  getCards(): Card[] {
    return this._cards;
  }
}
