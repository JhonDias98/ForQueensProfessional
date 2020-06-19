import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getAllContatos() {
    return this.http.get("http://localhost:8080/contatos")
  }

  getByIdContato(id: number) {
    return this.http.get(`http://localhost:8080/contatos/${id}`)
  }

  findByAssunto(assunto: string) {
    return this.http.get(`http://localhost:8080/contatos/assunto/${assunto}`)
  }

  postContato(contato: Contato) {
    return this.http.post("http://localhost:8080/contatos", contato)
  }

  putContato(contato: Contato) {
    return this.http.put("http://localhost:8080/contatos", contato)
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/contatos/${id}`)
  }

  
}
