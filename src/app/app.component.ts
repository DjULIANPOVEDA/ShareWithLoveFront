import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: Observable<User | undefined>;
  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }
  logout(): void {
    this.userService.logout();
  }
}
