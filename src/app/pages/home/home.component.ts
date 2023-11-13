import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Cloth } from 'src/app/models/Cloth';
import { User } from 'src/app/models/User';
import { ClothService } from 'src/app/services/cloth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  $cloths?: Observable<Cloth[]>;
  cloths: Cloth[] = [];
  clothsFiltered: Cloth[] = [];
  user: Observable<User | undefined>;
  constructor(
    private clothService: ClothService,
    userService: UserService,
    private toastr: ToastrService
  ) {
    this.user = userService.getUser();
  }
  ngOnInit(): void {
    this.$cloths = this.clothService.getAllCloths();
    this.syncCloths();
  }
  syncCloths(): void {
    this.$cloths?.subscribe((res) => {
      console.log(res);
      this.cloths = res;
      this.clothsFiltered = res;
    });
  }

  filterList(): void {
    const search: string = this.inputSearch.nativeElement.value;
    this.clothsFiltered = this.cloths.filter((l) =>
      l.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  receivecloth(clothId: string): void {
    this.clothService.ReceiveCloth(clothId).subscribe(
      (res) => {
        if (res) {
          this.toastr.success('La prenda ha sido donada');
          this.syncCloths();
        } else this.toastr.error('No se ha completo la donación');
      },
      (err) => {
        this.toastr.error('No se ha completo la donación');
      }
    );
  }
}
