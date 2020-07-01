import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  constructor(private http: HttpClient) { }
  

  getAllEnderecos() {
    return this.http.get("http://localhost:8080/endereco", this.token)
  }

  getByIdEndereco(codigoEndereco: number) {
    return this.http.get(`http://localhost:8080/endereco/${codigoEndereco}`, this.token)
  }

  findByCep(cep: number) {
    return this.http.get(`http://localhost:8080/endereco/endereco/${cep}`, this.token)
  }

  getEndUser(id: number) {
    return this.http.get(`http://localhost:8080/endereco/meus/${id}`, this.token)
  }

  postEndereco(id: number, endereco: Endereco) {
    return this.http.post(`http://localhost:8080/endereco/${id}`, endereco, this.token)
  }

  putEndereco(endereco: Endereco) {
    return this.http.put("http://localhost:8080/endereco", endereco, this.token)
  }

  delete(codigoendereco: number) {
    return this.http.delete(`http://localhost:8080/endereco/${codigoendereco}`, this.token)
  }
}
