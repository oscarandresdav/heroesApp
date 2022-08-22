import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth)
      );
  }

  logout() {
    this._auth = undefined;
  }

}
