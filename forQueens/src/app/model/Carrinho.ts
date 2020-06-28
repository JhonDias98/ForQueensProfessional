import { Produto } from './Produto'

export class Carrinho {
  id: number
  nome: string
  categoria: string
  urlImagem: string
  valor: number
  quantidade: number

  constructor(produto: Produto) {
    this.id = produto.codigoProduto
    this.nome = produto.nomeProduto
    this.urlImagem = produto.urlImage
    this.valor = produto.valor
    this.categoria = produto.categoria.descricao
    this.quantidade = 1
  }
}