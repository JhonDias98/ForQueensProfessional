import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getAllEnderecos() {
    return this.http.get("http://localhost:8080/endereco")
  }

  getByIdEndereco(codigoEndereco: number) {
    return this.http.get(`http://localhost:8080/endereco/${codigoEndereco}`)
  }

  findByCep(cep: number) {
    return this.http.get(`http://localhost:8080/endereco/endereco/${cep}`)
  }

  postEndereco(endereco: Endereco) {
    return this.http.post("http://localhost:8080/endereco", endereco)
  }

  putEndereco(endereco: Endereco) {
    return this.http.put("http://localhost:8080/endereco", endereco)
  }

  delete(codigoendereco: number) {
    return this.http.delete(`http://localhost:8080/endereco/${codigoendereco}`)
  }
}
