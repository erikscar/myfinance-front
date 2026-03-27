import { inject, Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Access {
  private http: HttpClient = inject(HttpClient);

    loginUser(userData: any) {
    const url = "http://localhost:5151/User/login";
    
    return firstValueFrom(this.http.post(url, {email: userData.email, password: userData.password}));
  }
}
