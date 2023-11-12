import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading = false;
  loginForm: FormGroup;
  message?: { isSuccess: boolean; message: string } = undefined;
  initForm(): FormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.loginForm = this.initForm();
  }
  onSubmit(): void {
    this.message = undefined;
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) return;
    this.isLoading = true;
    this.userService.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);

        this.userService.login(res);
        this.isLoading = false;
      },
      (err) => {
        this.message = {
          isSuccess: false,
          message: 'USER_PASSWORD_INCORRECT',
        };
        this.isLoading = false;
      }
    );
  }
}
