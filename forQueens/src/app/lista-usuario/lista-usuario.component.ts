import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  delOk: boolean = false

  listaUsers: Usuario[]
  

  user: Usuario = new Usuario

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findAllUsers()
    let id: number = this.route.snapshot.params["id"]
    this.getId(id)
    window.scroll(0, 0)
  }

  findAllUsers() {
    this.usuarioService.getAllUsers().subscribe((resp: Usuario[]) => {
      this.listaUsers = resp
    })
  }

  getId(id: number) {
    this.usuarioService.getUserById(id).subscribe((resp: Usuario) => {
      this.user = resp
    }, err => {
      console.log(`Erro: ${err.status}, ocorreu um erro na busca pelo id`)
    })
  }

  btnSim() {
    this.usuarioService.deletar(this.user.id).subscribe(() => {
      this.delOk = true
      location.assign('/usuarios')
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }

  salvar() {
    this.usuarioService.putUser(this.user).subscribe((resp: Usuario) => {
      this.user = resp
      location.assign('/usuarios')
      this.router.navigate(['/usuarios'])
    })
  }
}
