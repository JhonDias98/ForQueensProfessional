import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrarUsuario(user: Usuario) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnComLogin() {
    let ok = false;
    let token = localStorage.getItem('token')

    // Aparcer após login
    if (token != null) {
      ok = true
    }
    return ok;
  }

  btnSemLogin() {
    let ok = false;
    let token = localStorage.getItem('token')

    //Sumir após login
    if (token == null) {
      ok = true
    }
    return ok;
  }
}
