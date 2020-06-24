import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compra } from '../model/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  getAllCompra() {
    return this.http.get("http://localhost:8080/compra", this.token)
  }

  getByIdCompra(codigoCompra: number) {
    return this.http.get(`http://localhost:8080/compra/${codigoCompra}`, this.token)
  }

  postCategoria(compra: Compra) {
    return this.http.post("http://localhost:8080/compra", compra, this.token)
  }

  putCategoria(compra: Compra) {
    return this.http.put("http://localhost:8080/compra", compra, this.token)
  }

  delete(codigoCompra: number) {
    return this.http.delete(`http://localhost:8080/compra/${codigoCompra}`, this.token)
  }

}
