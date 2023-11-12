import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cloth } from 'src/app/models/Cloth';
import { User } from 'src/app/models/User';
import { ClothService } from 'src/app/services/cloth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User | undefined;
  cloths: Cloth[] = [];
  clothsDonate: Cloth[] = [];
  clothsAviable: Cloth[] = [];
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      if (!user) this.router.navigate(['/']);
    });

    this.clothService.getClothsByUser().subscribe((cloths: Cloth[]) => {
      this.clothsDonate = cloths.filter((cloth) => cloth.donateId);
      this.clothsAviable = cloths.filter((cloth) => !cloth.donateId);
    });
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private clothService: ClothService
  ) {}
}
