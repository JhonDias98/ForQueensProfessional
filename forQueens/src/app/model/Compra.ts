import { Produto } from './Produto'
import { Empresa } from './Empresa'
import { Usuario } from './Usuario'

export class Compra {
  public codigoCompra: number
  public tipoEntrega: string
  public dataCompra: Date
  public valor: number
  public qtdProduto: number
  public produto: Produto
  public empresa: Empresa
  public usuario: Usuario
}