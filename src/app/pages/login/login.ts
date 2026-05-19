import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Access } from '../../services/access';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  accessService: Access = inject(Access);
  router: Router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

   async loginUser() {
    var res = await this.accessService.loginUser(this.loginForm.value)

    localStorage.setItem("jwt", res.token);
    
    this.loginForm.reset;

    this.router.navigateByUrl("/home");
  }
}
