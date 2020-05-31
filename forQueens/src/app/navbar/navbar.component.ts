import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch

  user: Usuario = new Usuario

  data = {
    password: '',
    password_confirm: ''
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {    

    const busca = document.querySelector('.busca');

    busca.addEventListener('click', ()=> {
      document.getElementById("buscar").style.display="block"
    });
    this.cpf()
  }

  validacar() {
    if (this.data.password === this.data.password_confirm) {
      alert('Cadastrado com sucesso')
      this.cadastrar();
    } else {
      document.getElementById("confirmaSenha").style.border = "red 1px solid"
      document.getElementById("erro").style.display = "block"
    }
  }

  cadastrar() {
    this.usuarioService.postUser(this.user).subscribe((resp: Usuario) => {
      this.user = resp;
      location.assign('/usuarios');
    })
  }

  cpf() {
    document.getElementById("cpf").style.display = "block"
    document.getElementById("nascimento").style.display = "block"
    document.getElementById("cnpj").style.display = "none"
  }
  cnpj() {
    document.getElementById("cpf").style.display = "none"
    document.getElementById("nascimento").style.display = "none"
    document.getElementById("cnpj").style.display = "block"
  }

}
