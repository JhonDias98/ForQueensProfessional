import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Endereco } from '../model/Endereco';
import { EnderecoService } from '../service/endereco.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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

  end: number = 0

  constructor(private enderecoService: EnderecoService) { }

  listaEndereco: Endereco[]
  endereco: Endereco = new Endereco()

  ngOnInit() {
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

  formatarData(data: string) {
    let dia = data.substring(0, 2)
    let mes = data.substring(2, 4)
    let ano = data.substring(4, 8)
    return `${dia}/${mes}/${ano}`
  }

}
