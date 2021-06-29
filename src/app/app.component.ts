import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Angular Best Practices';

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
      this.auth.setAccessToken(token);
    }
  }
}
