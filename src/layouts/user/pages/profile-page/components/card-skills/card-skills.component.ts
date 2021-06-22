import { Component, Input } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { Card } from 'src/layouts/user/pages/profile-page/services/card-skills.service';

@Component({
  selector: 'card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss']
})

export class CardSkillsComponent {
  public _star = ICONS.STAR;
  private _card: Card;

  @Input()
  set card(value: Card) {
    this._card = value;
  }

  get card(): Card {
    return this._card;
  }

  constructor() {
  }


}
