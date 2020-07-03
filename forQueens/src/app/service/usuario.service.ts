import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:8080/usuarios')
  }

  getUserById(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }

  postUser(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario, this.token)
  }

  putUser(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario, this.token)
  }

  deletar(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }
}
