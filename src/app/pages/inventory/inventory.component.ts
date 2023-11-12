import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClothWithUser } from 'src/app/models/Cloth';
import { User } from 'src/app/models/User';
import { ClothService } from 'src/app/services/cloth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  user: Observable<User | undefined>;
  cloths: ClothWithUser[] = [];
  clothsFiltered: ClothWithUser[] = [];
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
    this.clothService.getStockCloths().subscribe((cloths) => {
      this.cloths = cloths;
      this.clothsFiltered = cloths;
    });
  }

  filterList(): void {
    const search: string = this.inputSearch.nativeElement.value;
    this.clothsFiltered = this.cloths.filter((l) =>
      l.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
