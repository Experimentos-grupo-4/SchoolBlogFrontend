import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioSignUp } from '../models/UsuarioSignup';
import { UsuarioSignIn } from '../models/UsuarioSignIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  signin(usuario: UsuarioSignIn) {
    return this.http.post(`${this.url}/signin`, usuario);
  }

  signup(usuario: UsuarioSignUp) {
    return this.http.post<UsuarioSignUp>(`${this.url}/signup`, usuario)
  }
}
