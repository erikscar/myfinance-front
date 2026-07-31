import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Access } from '../../services/access';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from "@ionic/angular/standalone";
import { HttpErrorResponse } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',  
  imports: [IonIcon, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  accessService: Access = inject(Access);
  router: Router = inject(Router);
  toastService: ToastrService = inject(ToastrService);
  
  showPassword: boolean = false;
  passwordIcon: string = "eye-off-outline";
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl(""),
  });

  async loginUser() {
    this.accessService.loginUser(this.loginForm.value).subscribe({
      next: () => {
        this.loginForm.reset;
        this.router.navigateByUrl("/home");
      },
      error: (httpErrorResponse: HttpErrorResponse) => {
        this.toastService.error(httpErrorResponse.error);
      }
    })
  }

  changePasswordDisplay() {
    this.showPassword = !this.showPassword;
  }
}
