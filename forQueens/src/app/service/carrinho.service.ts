import { Injectable } from '@angular/core';
import { Carrinho } from '../model/Carrinho';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Carrinho[] = []

  precoTotal: Subject<number> = new Subject<number>();
  quantidadeTotal: Subject<number> = new Subject<number>();
  constructor() { }

  adicionarAoCarrinho(itemCarrinho: Carrinho) {
    let possuiNoCarrinho: boolean = false;
    let carrinhoCriado: Carrinho = undefined;

    if (this.carrinho.length > 0) {

      for (let i of this.carrinho) {
        if (i.id === itemCarrinho.id) {
          carrinhoCriado = i;
          break;
        }
      }
      possuiNoCarrinho = (carrinhoCriado != undefined);
    }

    if (possuiNoCarrinho) {
      carrinhoCriado.quantidade++;
    }
    else {
      this.carrinho.push(itemCarrinho);
    }
    this.calcularTotal();
  }

  calcularTotal() {

    let valorTotalCarrinho: number = 0;
    let quantidadeTotalCarrinho: number = 0;

    for (let item of this.carrinho) {
      valorTotalCarrinho += item.quantidade * item.valor;
      quantidadeTotalCarrinho += item.quantidade;
    }

    this.precoTotal.next(valorTotalCarrinho);
    this.quantidadeTotal.next(quantidadeTotalCarrinho);

    this.detalheCarrinho(valorTotalCarrinho, quantidadeTotalCarrinho);
  }

  detalheCarrinho(valorTotalCarrinho: number, quantidadeTotalCarrinho: number) {
    for (let i of this.carrinho) {
      const subPrecoTotal = i.quantidade * i.valor;
    }
  }

  diminuirDoCariinho(carrinho: Carrinho) {

    carrinho.quantidade--;

    if (carrinho.quantidade === 0) {
      this.remover(carrinho);
    }
    else {
      this.calcularTotal();
    }
  }

  remover(carrinho: Carrinho) {

    const itemIndex = this.carrinho.findIndex(i => i.id === carrinho.id);

    if (itemIndex > -1) {
      this.carrinho.splice(itemIndex, 1);

      this.calcularTotal();
    }
  }
  
}
