import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  getAllPedido() {
    return this.http.get("http://localhost:8080/pedidos", this.token)
  }

  getByIdPedido(codigoPedido: number) {
    return this.http.get(`http://localhost:8080/pedidos/${codigoPedido}`, this.token)
  }

  postPedido(pedido: Pedido) {
    return this.http.post("http://localhost:8080/pedidos", pedido, this.token)
  }

  putPedido(pedido: Pedido) {
    return this.http.put("http://localhost:8080/pedidos", pedido, this.token)
  }

}
