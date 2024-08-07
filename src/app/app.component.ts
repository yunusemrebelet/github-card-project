import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: any;

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
