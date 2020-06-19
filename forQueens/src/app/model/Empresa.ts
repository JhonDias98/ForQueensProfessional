import { Endereco } from './Endereco'

export class Empresa {
  public cnpj: number
  public email: string
  public razaoSocial: string
  public nomeComercial: string
  public inscricaoEstadual: string
  public telefoneComercial: string
  public nomeComprador: string
  public senha: string
  public endereco: Endereco[]
}