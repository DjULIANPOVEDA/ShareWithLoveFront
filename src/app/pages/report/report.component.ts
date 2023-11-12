import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReportModel } from 'src/app/models/ReportModel';
import { User } from 'src/app/models/User';
import { ClothService } from 'src/app/services/cloth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  data: any;
  options: any;

  user: Observable<User | undefined>;
  report?: ReportModel;
  constructor(
    userService: UserService,
    private router: Router,
    private clothService: ClothService
  ) {
    this.user = userService.getUser();
  }
  ngOnInit(): void {
    this.user.subscribe((user) => {
      if (!user) this.router.navigate(['/']);
    });
    this.clothService.report().subscribe((report) => {
      this.report = report;
    });
  }
}
