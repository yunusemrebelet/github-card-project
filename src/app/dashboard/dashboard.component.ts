import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // AuthService'i import edin

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  user = {
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    name: 'Octocat',
    bio: 'GitHub mascot',
    login: 'octocat',
  };

  constructor(public authService: AuthService) {} // AuthService'i constructor'a ekleyin
}
