import { Endereco } from './Endereco'

export class Usuario {
  public id: number
  public cpf: number
  public usuario: string
  public nome: string
  public celular: string
  public dataNascimento: String
  public senha: number
  public endereco: Endereco[]
}