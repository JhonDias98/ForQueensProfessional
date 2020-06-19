import { Empresa } from './Empresa'
import { Usuario } from './Usuario'

export class Endereco {
  public codigoEndereco: number
  public estado: string
  public cidade: string
  public bairro: string
  public rua: string
  public numero: number
  public complemento: string
  public cep: number
  public empresa: Empresa
  public usuario: Usuario
}