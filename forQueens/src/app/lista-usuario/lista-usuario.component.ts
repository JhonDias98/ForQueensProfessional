import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaUsers: Usuario[]
  

  user: Usuario = new Usuario

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.findAllUsers()
  }

  findAllUsers() {
    this.usuarioService.getAllUsers().subscribe((resp: Usuario[]) => {
      this.listaUsers = resp
    })
  }
}
