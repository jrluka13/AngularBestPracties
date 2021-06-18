import { Injectable } from '@angular/core';
import { ICONS } from '../../../../../shared/components/svg-icon/icons-list';

export interface Board {
  text: string;
  iconName: ICONS;
  time: Date;
}

@Injectable()
export class LeaderBoardService {
  private _list: Board[] = [
    {
      text: '30 maximum with 3 dots sssssssssss adawdaw dasawdawdawddadw',
      iconName: ICONS.USER,
      time: new Date()
    },
    {
      text: '30 maximum with 3 dots sssssssssss adawdaw dasawdawdawddadw',
      iconName: ICONS.USER,
      time: new Date()
    },
    {
      text: '30 maximum with 3 dots sssssssssss adawdaw dasawdawdawddadw',
      iconName: ICONS.USER,
      time: new Date()
    },

  ];

  getList(): Board[] {
    return this._list;
  }

}
