import { inject, Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RegisterUserData } from '../../models/UserData';

@Injectable({
  providedIn: 'root',
})
export class Access {
  private http: HttpClient = inject(HttpClient);

  url: string = "http://localhost:5151/User/";

    loginUser(userData: any): any {
      console.log(userData);
      return firstValueFrom(this.http.post(this.url + "login", {
        email: userData.email, 
        password: userData.password
      },
      { withCredentials : true }
    ));
    };

    registerUser(userData: RegisterUserData) {
      
      return firstValueFrom(this.http.post(this.url + "register", userData, { withCredentials: true }))
    };

    getUsers() {
      return firstValueFrom(this.http.get(this.url + "users", { withCredentials: true }))
    }

}
