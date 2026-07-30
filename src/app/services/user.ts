import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  public readonly http = inject(HttpClient);
  url: string = environment.apiUrl;

  async getUsers()
  {
    return firstValueFrom(this.http.get(this.url + "users", {withCredentials: true}));
  }
}
