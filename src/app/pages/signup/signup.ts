import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { Access } from '../../services/access';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-signup',
  imports: [IonIcon, RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  public readonly userService = inject(Access);
  public readonly router = inject(Router);
  showPassword: boolean = false;
  passwordIcon: string = "eye-off-outline";

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("", [this.passwordValidator()]),
    confirmPassword: new FormControl("", this.passwordMissmatchValidator())
  });

  async registerUser() {
    console.log(this.registerForm.value)
    await this.userService.registerUser(this.registerForm.value);

    this.registerForm.reset;

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

  passwordMissmatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get('password')?.value;
      const confirmPassword = control.parent?.get("confirmPassword")?.value

      return password === confirmPassword ? null: { passwordMismatch: true };
    }
  }

  get passwordErrors() {
    return this.registerForm.get('password')?.errors;
  }

  get passwordStrength() {
    const password = this.registerForm.get('password')?.value;

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
