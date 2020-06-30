import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

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

  constructor() { }

  ngOnInit() {

    
    
  }

  formatarData(data: string) {
    let dia = data.substring(0, 2)
    let mes = data.substring(2, 4)
    let ano = data.substring(4, 8)
    return `${dia}/${mes}/${ano}`
  }

}
