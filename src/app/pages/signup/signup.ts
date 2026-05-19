import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { Access } from '../../services/access';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  public readonly userService = inject(Access);
  public readonly router = inject(Router);

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  })

  async registerUser() {
    await this.userService.registerUser(this.registerForm.value);

    this.registerForm.reset;

    this.router.navigateByUrl("/home");
  }
}
