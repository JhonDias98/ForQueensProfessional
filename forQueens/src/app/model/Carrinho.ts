import { Produto } from './Produto'


export class Carrinho {
  id: number
  nome: string
  urlImagem: string
  valor: number
  quantidade: number

  constructor(produto: Produto) {
    this.id = produto.codigoProduto
    this.nome = produto.nomeProduto
    this.urlImagem = produto.urlImage
    this.valor = produto.valor
    this.quantidade = 1
  }
}