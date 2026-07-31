import { inject, Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { LoginUserData, RegisterUserData } from '../../models/UserData';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Access {
  private http: HttpClient = inject(HttpClient);

  url: string = environment.apiUrl + "User";

  loginUser(loginData: LoginUserData): Observable<void> {
     return this.http.post<void>(this.url + "/login", {
        email: loginData.email,
        password: loginData.password
    })
  };

  registerUser(userData: RegisterUserData) {
    return firstValueFrom(this.http.post(this.url + "register", userData, { withCredentials: true }))
  };
}
