import { Produto } from './Produto'

export class Categoria {
  public codigoCategoria: number
  public descricao: string
  public produtos: Produto[]
}