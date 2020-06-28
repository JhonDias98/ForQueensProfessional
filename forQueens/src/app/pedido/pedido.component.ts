import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Carrinho } from '../model/Carrinho';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  faPlus = faPlus
  faMinus = faMinus

  carrinho: Carrinho[] = []
  valorTotal: number = 0
  quantidadeTotal: number = 0

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.detalhesCarrinho()
    window.scroll(0, 0)
  }

  detalhesCarrinho() {
    this.carrinho = this.carrinhoService.carrinho
    this.carrinhoService.precoTotal.subscribe(data => this.valorTotal = data)

    this.carrinhoService.quantidadeTotal.subscribe(data => this.quantidadeTotal = data)

    this.carrinhoService.calcularTotal()
  }
  
  incrementarQuantidade(carrinho: Carrinho) {
    this.carrinhoService.adicionarAoCarrinho(carrinho)
  }

  decrementarQuantidade(carrinho: Carrinho) {
    this.carrinhoService.diminuirDoCariinho(carrinho)
  }

  remover(carrinho: Carrinho) {
    this.carrinhoService.remover(carrinho)
  }

}
