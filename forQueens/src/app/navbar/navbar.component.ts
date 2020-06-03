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
    password_confirm: '',
    nome: '',
    cpf: ''
  }
  
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {    
    
    const busca = document.querySelector('.busca');
    
    busca.addEventListener('click', ()=> {
      document.getElementById("buscar").style.display="block"
    });
    this.cpf()
  }
  
  validar() {
    let erros = []
    erros.push(this.verificar_nome())
    erros.push(this.verificar_cpf())
    erros.push(this.verificar_senha())
    erros.push(this.verificar_confirmasenha())
    if (erros.indexOf(false) == -1){
      alert('Cadastrado com sucesso')
      this.cadastrar();
    }
  }
  verificar_senha(){
    if (this.data.password.length < 6){
      document.getElementById("senha").style.border = "red 1px solid"
      document.getElementById("erro_senha").style.display = "block"
      return false
    }
    else{
      document.getElementById("senha").style.border = "black 1px solid"
      document.getElementById("erro_senha").style.display = "none"
      return true
    }
  }
  verificar_confirmasenha(){
    if (this.data.password === this.data.password_confirm) {
      document.getElementById("confirmaSenha").style.border = "black 1px solid"
      document.getElementById("erro_confirmaSenha").style.display = "none"
      return true
    } else {
      document.getElementById("confirmaSenha").style.border = "red 1px solid"
      document.getElementById("erro_confirmaSenha").style.display = "block"
      return false
    }
  }
  verificar_nome(){
    let nome = this.data.nome
    nome.split("")
    if(nome.length < 5 || nome.indexOf(" ") == -1){
      document.getElementById("nome").style.border = "red 1px solid"
      document.getElementById("erro_nome").style.display = "block"
      return false
    }
    else{
      document.getElementById("nome").style.border = "black 1px solid"
      document.getElementById("erro_nome").style.display = "none"
      return true
    }
    
  }
  verificar_cpf(){
    let dig1 = 0
    let dig2 = 0
    let cpf = this.data.cpf
    let cpflista = []
    let cpfsruins = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]
    let pesos = [10,9,8,7,6,5,4,3,2] // utilizado para multiplicar os numeros do cpf
    let soma = 0 // calcula os necessarios para validação
    
    if(cpfsruins.indexOf(cpf) != -1){
      return false
    }
    if(cpf.length == 11){ // valida o tamanho
      cpflista = cpf.split("")
      for(let i = 0; i < cpf.length-2; i++){ 
        cpflista[i] = parseInt(cpflista[i])
        soma += cpflista[i]*pesos[i] // calcula a soma para o primeiro digito de validação
      }
      dig1 = 11 - (soma%11)
      if(dig1 > 9){ // faz uma verificação de acordo com as regras do cpf
        dig1 = 0
      }
      if(dig1 == cpflista[9]){ // verifica se o primeiro digito esta valido
        pesos.unshift(11) // adiciona o 11 para futura validação
        soma = 0 // reseta a variavel soma
        for(let i = 0; i < cpflista.length-1; i++){
          soma += Number(cpflista[i])*pesos[i] // calcula a soma para o segundo digito de validação 
        }

        dig2 = 11 - (soma%11)
        if(dig2 > 9){ // faz uma verificação de acordo com as regras do cpf
          dig2 = 0
        }

        if(dig2 == cpflista[10]){ // confirma se o segundo digito é valido, e assim se o cpf é valido
          document.getElementById("cadastroPF").style.border = "black 1px solid"
          document.getElementById("erro_cpf").style.display = "none"
          return true
        }
        document.getElementById("cadastroPF").style.border = "red 1px solid"
        document.getElementById("erro_cpf").style.display = "block"
        return false
        
      }
      document.getElementById("cadastroPF").style.border = "red 1px solid"
      document.getElementById("erro_cpf").style.display = "block"
      return false
    }
    document.getElementById("cadastroPF").style.border = "red 1px solid"
    document.getElementById("erro_cpf").style.display = "block"
    return false
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
