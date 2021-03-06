import { Categoria } from './Categoria';

export class Produto {
  public codigoProduto: number
  public nomeProduto: string
  public urlImage: string
  public descricao: string
  public quantidade: string
  public valor: number
  public categoria: Categoria
}