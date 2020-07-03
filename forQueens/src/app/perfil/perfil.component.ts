import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Endereco } from '../model/Endereco';
import { EnderecoService } from '../service/endereco.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  faTrash = faTrash;
  faEdit = faEdit;

  id: string = localStorage.getItem('id')
  cpf: string = localStorage.getItem('cpf')
  usuario: string = localStorage.getItem('usuario')
  nome: string = localStorage.getItem('nome')
  celular: string = localStorage.getItem('celular');
  dataNascimento: string = localStorage.getItem('dataNascimento');
  senha: string = localStorage.getItem('senha');
  token: string = localStorage.getItem('token');
  usuarioLogin: UserLogin = new UserLogin

  umEndereco = {
    codigoEndereco: 0,
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    cep: ''
  }

  perfil = {
    id: 0,
    cpf: 0,
    usuario: '',
    nome: '',
    celular: '',
    dataNascimento: '',
    senha: 0,
    endereco: []
  }

  end: number = 0

  constructor(private enderecoService: EnderecoService) { }

  listaEndereco: Endereco[]
  endereco: Endereco = new Endereco()

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllEnderecos()
  }

  findAllEnderecos() {
    let ender = Number(localStorage.getItem('id'))
    this.enderecoService.getEndUser(ender).subscribe((resp: Endereco[]) => {
      this.listaEndereco = resp
    })
  }

  // getIdEndereco() {
  //   this.end = Number(localStorage.getItem('id'))
  //   this.enderecoService.getByIdEndereco(this.end).subscribe((resp: Endereco) => {
  //     this.endereco = resp
  //     this.umEndereco.codigoEndereco = this.endereco.codigoEndereco
  //     this.umEndereco.rua = this.endereco.rua
  //     this.umEndereco.cep = this.endereco.cep
  //     this.umEndereco.cidade = this.endereco.cidade
  //     this.umEndereco.estado = this.endereco.estado
  //     this.umEndereco.numero = this.endereco.numero
  //     this.umEndereco.complemento = this.endereco.complemento
  //     this.umEndereco.bairro = this.endereco.bairro
  //   })
  // }

  // getEnderecos() {
  //   this.end = Number(localStorage.getItem('id'))
  //   this.enderecoService.getByIdEndereco(this.end).subscribe((resp: Endereco[]) => {
  //     this.listaEndereco = resp
  //   })
  // }

  adicionarEndereco() {
    this.end = Number(localStorage.getItem('id'))
    this.enderecoService.postEndereco(this.end, this.endereco).subscribe((resp: Endereco) => {
      this.endereco = resp;
      alert("Endereço cadastrado com sucesso")
      location.assign("/perfil")
    })
  }

  pegarUmEndereco(id: number) {
    this.enderecoService.getByIdEndereco(id).subscribe((resp: Endereco) => {
      this.endereco = resp
    })
  }

  editarEndereco() {
    this.enderecoService.putEndereco(this.endereco).subscribe((resp: Endereco) => {
      this.endereco = resp
      location.reload()
    })
  }

  deletarEndereco() {
    this.enderecoService.delete(this.endereco.codigoEndereco).subscribe(() => {
      location.assign('/perfil')
    })
  }

  formatarData(data: string) {
    let dia = data.substring(0, 2)
    let mes = data.substring(2, 4)
    let ano = data.substring(4, 8)
    return `${dia}/${mes}/${ano}`
  }

  formatarCpf(cpf: string) {
    let tresP = cpf.substring(0, 3)
    let tresS = cpf.substring(3, 6)
    let tresT = cpf.substring(6, 9)
    let doisQ = cpf.substring(9, 11)
    return `${tresP}.${tresS}.${tresT}-${doisQ}`
  }

  formatarNumero(numero: string) {
    let dois = numero.substring(0, 2)
    let cinco = numero.substring(2, 7)
    let quatro = numero.substring(7, 11)
    return `(${dois})${cinco}-${quatro}`
  }

}
