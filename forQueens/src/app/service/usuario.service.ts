import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://93.188.161.223:9000/user')
  }

  getUserById(id: number) {
    return this.http.get(`http://93.188.161.223:9000/user/${id}`)
  }

  postUser(user: Usuario) {
    return this.http.post('http://93.188.161.223:9000/user', user)
  }

  putUser(user: Usuario) {
    return this.http.put('http://93.188.161.223:9000/user', user)
  }

  deletar(id: number) {
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
  }
}
