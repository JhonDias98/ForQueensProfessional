import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../model/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  getAllCompra() {
    return this.http.get("http://localhost:8080/compra")
  }

  getByIdCompra(codigoCompra: number) {
    return this.http.get(`http://localhost:8080/compra/${codigoCompra}`)
  }

  postCategoria(compra: Compra) {
    return this.http.post("http://localhost:8080/compra", compra)
  }

  putCategoria(compra: Compra) {
    return this.http.put("http://localhost:8080/compra", compra)
  }

  delete(codigoCompra: number) {
    return this.http.delete(`http://localhost:8080/compra/${codigoCompra}`)
  }

}
