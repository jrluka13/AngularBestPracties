import { Component, Input, OnInit } from '@angular/core';
import { ICONS } from 'src/shared/components/svg-icon/icons-list';
import { Router } from '@angular/router';
import { LinksList } from 'src/shared/components/header/links-list';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _typeUser: string;

  private _title: string;

  private _logo = ICONS.ANGULAR;

  private _rightIcons = [
    ICONS.SEARCH,
    ICONS.CURSOR,
    ICONS.BELL,
    ICONS.LIST,
  ];

  private _linksUser = [
    {
      linkName: 'Overview',
      link: 'overview',
    },
    {
      linkName: 'Settings',
      link: 'settings',
    },
    {
      linkName: 'Profile',
      link: 'profile',
    },
  ];

  private _linksAdmin = [
    {
      linkName: 'Roles',
      link: 'roles',
    },
    {
      linkName: 'Users',
      link: 'users',
    },
  ];

  constructor(private router: Router, private auth: AuthService) {
  }

  get typeUser(): string {
    return this._typeUser;
  }

  get logoIcon(): ICONS {
    return this._logo;
  }

  get rightIcons(): ICONS[] {
    return this._rightIcons;
  }

  get linksUser(): LinksList[] {
    return this._linksUser;
  }

  get linksAdmin(): LinksList[] {
    return this._linksAdmin;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  ngOnInit(): void {
    this._typeUser = this.router.url.split('/')[1];
  }

  iconByName(index: number, name: ICONS): ICONS {
    return name;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.auth.logout();
  }
}
