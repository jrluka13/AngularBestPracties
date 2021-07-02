import { Injectable } from '@angular/core';
import { ICONS } from '../shared/svg-icon/icons-list';

export interface Badge {
  name: string;
  icon: ICONS;
}

@Injectable()

export class BadgesService {
  constructor() {
  }

  private _badges: Badge[] = [
    {
      name: 'Bridge',
      icon: ICONS.BICYCLE,
    },
    {
      name: 'Energy',
      icon: ICONS.STAR,
    },
    {
      name: 'Data Analytics Champ',
      icon: ICONS.ANALYTICS,
    },
    {
      name: 'Fastest JOD',
      icon: ICONS.BELL,
    },
    {
      name: 'Consistent Cleaner',
      icon: ICONS.BOOK,
    },
    {
      name: 'Broadcast',
      icon: ICONS.BROADCAST,
    },
    {
      name: 'Data Analytics Champ',
      icon: ICONS.ANALYTICS,
    },
    {
      name: 'Data Analytics Champ',
      icon: ICONS.ANALYTICS,
    },
    {
      name: 'Data Analytics Champ',
      icon: ICONS.ANALYTICS,
    },
  ];

  getBadges(): Badge[] {
    return this._badges;
  }
}
