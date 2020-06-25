import { Produto } from './Produto'
import { Empresa } from './Empresa'
import { Usuario } from './Usuario'

export class Pedido {
  public codigoCompra: number
  public tipoEntrega: string
  public dataCompra: Date
  public valor: number
  public qtdProduto: number
  public empresa: Empresa
  public usuario: Usuario
  public produto: Produto[]
  public prods: Array<number>
}