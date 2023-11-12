import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading = false;
  registerForm: FormGroup;
  message?: { isSuccess: boolean; message: string } = undefined;
  initForm(): FormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.registerForm = this.initForm();
  }

  onSubmit() {
    this.message = undefined;
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) return;
    this.isLoading = true;
    this.userService.registerUser(this.registerForm.value).subscribe(
      (res) => {
        this.message = {
          isSuccess: res,
          message: res ? 'SUCCESS' : 'FAILEND',
        };
        this.isLoading = false;
      },
      (err) => {
        this.message = {
          isSuccess: false,
          message: 'FAILEND',
        };
        this.isLoading = false;
      }
    );
  }
}
