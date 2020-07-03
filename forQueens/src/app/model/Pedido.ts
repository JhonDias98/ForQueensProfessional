import { Produto } from './Produto'
import { Usuario } from './Usuario'

export class Pedido {
  public codigoCompra: number
  public tipoEntrega: string
  public dataCompra: Date
  public valor: number
  public qtdProduto: number
  public usuario: Usuario
  public produto: Produto[]
  public prods: Array<number>
}