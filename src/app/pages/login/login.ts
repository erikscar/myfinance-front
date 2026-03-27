import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Access } from '../../services/access';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  accessService = inject(Access);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

   async loginUser() {
    var res =  await this.accessService.loginUser(this.loginForm.value)
    console.log(res);
  }
}
