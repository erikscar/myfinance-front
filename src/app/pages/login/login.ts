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
    password: new FormControl("", this.passwordValidator()),
  });


  async loginUser() {
    await this.accessService.loginUser(this.loginForm.value)
    this.loginForm.reset;

    this.router.navigateByUrl("/home");
  }

  changePasswordDisplay() {
    this.showPassword = !this.showPassword;
  }

  passwordValidator(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value ?? "";

      const hasUpperCase = /[A-Z]+/.test(password);
      const hasLowerCase = /[a-z]+/.test(password);
      const hasSymbol =  /^(?=.*[@!#$%^&*()/\\])/.test(password);
      const hasMinimumLength = password.length >= 8;
      
      const passwordStrength = {
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
        hasSymbol: hasSymbol,
        hasMinimumLength: hasMinimumLength
      }

      const isValid = hasUpperCase && hasLowerCase && hasSymbol && hasMinimumLength;
      
      return isValid ? null : passwordStrength;
    }
  }

  get passwordErrors() {
    return this.loginForm.get('password')?.errors;
  }

  get passwordStrength() {
    const password = this.loginForm.get('password')?.value;

    let strengthScore = 0;

    if(/[A-Z]+/.test(password)) strengthScore++
    if(/[a-z]+/.test(password)) strengthScore++
    if(/[0-9]/.test(password)) strengthScore++
    if(/^(?=.*[@!#$%^&*()/\\])/.test(password)) strengthScore++
    if(password.length >= 8) strengthScore++
    
    return strengthScore;
  }

  get passwordStrengthColor() {
    switch (this.passwordStrength) {
      case 0:
        return '#ccc';
      case 1:
        return '#f44336';
      case 2:
        return '#ff9800';
      case 3:
        return '#fce300';
      case 4:
        return '#004602';
      case 5:
        return '#4caf50';
      default:
        return '#ccc';
    }
  }
}
