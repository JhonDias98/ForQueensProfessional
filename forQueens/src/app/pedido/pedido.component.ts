import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Carrinho } from '../model/Carrinho';
import { faPlus, faMinus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { EnderecoService } from '../service/endereco.service';
import { Endereco } from '../model/Endereco';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  listaEndereco: Endereco[];
  endereco: Endereco = new Endereco();
  end: number = 0;

  carrinho: Carrinho[] = [];
  valorTotal: number = 0;
  quantidadeTotal: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private enderecoService: EnderecoService
  ) {}

  ngOnInit() {
    this.detalhesCarrinho();
    window.scroll(0, 0);
    this.findAllEnderecos();
  }

  findAllEnderecos() {
    let ender = Number(localStorage.getItem('id'));
    this.enderecoService.getEndUser(ender).subscribe((resp: Endereco[]) => {
      this.listaEndereco = resp;
    });
  }

  adicionarEndereco() {
    this.end = Number(localStorage.getItem('id'));
    this.enderecoService
      .postEndereco(this.end, this.endereco)
      .subscribe((resp: Endereco) => {
        this.endereco = resp;
        location.reload()
        alert('Endereço cadastrado com sucesso');
      });
  }

  confirmarCompra() {
    location.assign("/home")
    sessionStorage.clear()
  }

  detalhesCarrinho() {
    this.carrinho = this.carrinhoService.carrinho;
    this.carrinhoService.precoTotal.subscribe(
      (data) => (this.valorTotal = data)
    );

    this.carrinhoService.quantidadeTotal.subscribe(
      (data) => (this.quantidadeTotal = data)
    );

    this.carrinhoService.calcularTotal();
  }

  incrementarQuantidade(carrinho: Carrinho) {
    this.carrinhoService.adicionarAoCarrinho(carrinho);
  }

  decrementarQuantidade(carrinho: Carrinho) {
    this.carrinhoService.diminuirDoCariinho(carrinho);
  }

  remover(carrinho: Carrinho) {
    this.carrinhoService.remover(carrinho);
  }
}
