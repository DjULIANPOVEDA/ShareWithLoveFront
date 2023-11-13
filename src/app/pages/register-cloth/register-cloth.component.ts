import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClothService } from 'src/app/services/cloth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-cloth',
  templateUrl: './register-cloth.component.html',
  styleUrls: ['./register-cloth.component.css'],
})
export class RegisterClothComponent {
  isLoading: boolean = false;
  registrarclothForm: FormGroup;
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
    });
  }
  message?: { isSuccess: boolean; message: string } = undefined;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clothService: ClothService,
    private router: Router
  ) {
    this.registrarclothForm = this.initForm();
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user) this.router.navigate(['/']);
    });
  }
  onSubmit(): void {
    this.message = undefined;
    this.registrarclothForm.markAllAsTouched();
    if (!this.registrarclothForm.valid) return;
    this.isLoading = true;
    this.clothService.registerCloth(this.registrarclothForm.value).subscribe(
      (res) => {
        if (res) {
          this.message = {
            isSuccess: true,
            message: 'Se ha registrado la prenda',
          };
        } else {
          this.message = {
            isSuccess: true,
            message: 'ocurrio un error al intentar registrar la prenda',
          };
        }
        this.isLoading = false;
      },
      (err) => {
        this.message = {
          isSuccess: true,
          message: 'ocurrio un error al intentar registrar la prenda',
        };
        this.isLoading = false;
      }
    );
  }
}
