import { inject, Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Access {
  private http: HttpClient = inject(HttpClient);

  url: string = "http://localhost:5151/User/";

    loginUser(userData: any): any {
      return firstValueFrom(this.http.post(this.url + "login", {
        email: userData.email, 
        password: userData.password
      },
      { withCredentials : true }
    ));


    };

    registerUser(userData: any) {
      
      return firstValueFrom(this.http.post(this.url + "register", { 
            name: userData.name,
            email: userData.email,
            password: userData.password,
            confirmPassword: userData.confirmPassword
       }))
    };

    getUsers() {
      return firstValueFrom(this.http.get(this.url + "users", { withCredentials: true }))
    }

}
