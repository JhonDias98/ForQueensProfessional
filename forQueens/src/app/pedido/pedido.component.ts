import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  produto: Produto[]
  pedido: Pedido = new Pedido
  listaPedido: Pedido[]

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.findAllPedido()
  }

  findAllPedido() {
    this.pedidoService.getAllPedido().subscribe((resp: Pedido[]) => {
      this.listaPedido = resp;
    });
  }

  findPedido(id: number) {
    this.pedidoService.getByIdPedido(id).subscribe((resp: Pedido) => {
      this.pedido = resp;
    });
  }

}
