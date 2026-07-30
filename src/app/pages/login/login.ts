import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Access } from '../../services/access';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',  
  imports: [IonIcon, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  accessService: Access = inject(Access);
  router: Router = inject(Router);
  showPassword: boolean = false;
  passwordIcon: string = "eye-off-outline";
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl(""),
  });

  async loginUser() {
    await this.accessService.loginUser(this.loginForm.value)
    this.loginForm.reset;

    this.router.navigateByUrl("/home");
  }

  changePasswordDisplay() {
    this.showPassword = !this.showPassword;
  }
}
