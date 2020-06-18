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
    email:'',
    nome: '',
    senha: '',
    senha_confirma: '',
    cpf: '',
    cnpj: '',
    data_nascimento: '',
    razao_social: '',
    inscricao_estadual: '',
    nome_comercial: ''
  }
  
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {    
    
    const busca = document.querySelector('.busca');
    
    busca.addEventListener('click', ()=> {
      document.getElementById("buscar").style.display="block"
    });
    this.cpf()

    const btn = document.querySelector('.navbar-toggler');
    const navbar = document.querySelector('.navbar');
    const backdrop = document.getElementById("backdrop")

    btn.addEventListener('click', () => {

      navbar.classList.toggle('sidebar-open')

      if (navbar.classList.contains('sidebar-open')) {
        backdrop.style.display = "block"
        backdrop.addEventListener('click', () => {
          backdrop.style.display = "none"
        })

      } else {
        backdrop.style.display = "none"
      }
    })
  }

  validarCPF() {
    let erros = []
    erros.push(this.verificar_dataNascimento())
    erros.push(this.verificar_email())
    erros.push(this.verificar_nome())
    erros.push(this.verificar_cpf())
    erros.push(this.verificar_senha())
    erros.push(this.verificar_confirmasenha())
    if (erros.indexOf(false) == -1){
      alert('Cadastrado com sucesso')
      this.cadastrar();
    }
  }


  validarCNPJ(){
    let erros = []
    erros.push(this.verificar_email())
    erros.push(this.verificar_nome())
    erros.push(this.verificar_cnpj())
    erros.push(this.verificar_senha())
    erros.push(this.verificar_razaoSocial())
    erros.push(this.verificar_inscricaoEstadual())
    erros.push(this.verificar_nomeComercial())
    erros.push(this.verificar_confirmasenha())
    if (erros.indexOf(false) == -1){
      alert('Cadastrado com sucesso')
      this.cadastrar();
    }
  }


  verificar_email(){
    let email = this.data.email
    if(email == ""){
      document.getElementById("email").style.border = "red 1px solid"
      document.getElementById("vazio_email").style.display = "block"
      return false
    }
    else{
      document.getElementById("email").style.border = "black 1px solid"
      document.getElementById("vazio_email").style.display = "none"
    }
    if(email.match(/^[\w.-]+@[\w.-]+$/)){
      let emailLista = email.split("")
        if(emailLista.indexOf(".") != -1){
            email = emailLista.join("")
            emailLista = email.split(".")
            if(emailLista.indexOf("com") != -1){
              document.getElementById("email").style.border = "black 1px solid"
              document.getElementById("erro_email").style.display = "none"
              return true
            }
            document.getElementById("email").style.border = "red 1px solid"
            document.getElementById("erro_email").style.display = "block"
            return false
        }
        document.getElementById("email").style.border = "red 1px solid"
        document.getElementById("erro_email").style.display = "block"
        return false
    }
    document.getElementById("email").style.border = "red 1px solid"
    document.getElementById("erro_email").style.display = "block"
    return false
  }


  verificar_senha(){
    let senha = this.data.senha
    if(senha == ""){
      document.getElementById("senha").style.border = "red 1px solid"
      document.getElementById("vazio_senha").style.display = "block"
      return false
    }
    else{
      document.getElementById("senha").style.border = "black 1px solid"
      document.getElementById("vazio_senha").style.display = "none"
    }
    if (senha.length < 6){
      document.getElementById("senha").style.border = "red 1px solid"
      document.getElementById("erro_senha").style.display = "block"
      return false
    }
      document.getElementById("senha").style.border = "black 1px solid"
      document.getElementById("erro_senha").style.display = "none"
      return true
  }


  verificar_confirmasenha(){
    if (this.data.senha === this.data.senha_confirma) {
      document.getElementById("confirmaSenha").style.border = "black 1px solid"
      document.getElementById("erro_confirmaSenha").style.display = "none"
      return true
    }
    document.getElementById("confirmaSenha").style.border = "red 1px solid"
    document.getElementById("erro_confirmaSenha").style.display = "block"
    return false
  }


  verificar_nome(){
    let nome = this.data.nome
    if(nome == ""){
      document.getElementById("nome").style.border = "red 1px solid"
      document.getElementById("vazio_nome").style.display = "block"
      return false
    }
    else{
      document.getElementById("nome").style.border = "black 1px solid"
      document.getElementById("vazio_nome").style.display = "none"
    }
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


  verificar_dataNascimento(){
    let dataNascimento = this.data.data_nascimento
    if(dataNascimento == ""){
      document.getElementById("dataNascimento").style.border = "red 1px solid"
      document.getElementById("vazio_dataNascimento").style.display = "block"
      return false
    }
    else{
      document.getElementById("dataNascimento").style.border = "black 1px solid"
      document.getElementById("vazio_dataNascimento").style.display = "none"
    }
    if(dataNascimento.length != 8){
      document.getElementById("dataNascimento").style.border = "red 1px solid"
      document.getElementById("erro_dataNascimento").style.display = "block"
      return false
    }
    var minhaData = new Date();
    let anoHJ = minhaData.getFullYear()
    let mesHJ = minhaData.getMonth()+1
    let diaHJ = minhaData.getDate()
    let listaMeses31 = [1,3,5,7,8,10,12]
    let listaMeses30 = [4,6,9,11]
    let listaMeses28 = [2]
    let dia = Number(dataNascimento.substring(0,2))
    let mes = Number(dataNascimento.substring(2,4))
    let ano = Number(dataNascimento.substring(4,8))
    let bissexto:boolean
    if(anoHJ < ano || (anoHJ == ano && mesHJ < mes) || (anoHJ == ano && mesHJ == mes && diaHJ < dia)){
      document.getElementById("dataNascimento").style.border = "red 1px solid"
      document.getElementById("erro_dataNascimento").style.display = "block"
      return false
    }
    if(ano%4 == 0 && ano%100 != 0){
      bissexto = true
    }
    else{
      bissexto = false
    }
    if (listaMeses31.indexOf(mes) != -1 && dia > 31){
      document.getElementById("dataNascimento").style.border = "red 1px solid"
      document.getElementById("erro_dataNascimento").style.display = "block"
      return false
    } else {
      if(listaMeses30.indexOf(mes) != -1 && dia > 30){
        document.getElementById("dataNascimento").style.border = "red 1px solid"
        document.getElementById("erro_dataNascimento").style.display = "block"
        return false
      }
      else{
        if (listaMeses28.indexOf(mes) != -1 && dia > 28 && bissexto == false){
          document.getElementById("dataNascimento").style.border = "red 1px solid"
          document.getElementById("erro_dataNascimento").style.display = "block"
          return false
        }
        else{
          if(listaMeses28.indexOf(mes) != -1 && dia > 29 && bissexto == true){
            document.getElementById("dataNascimento").style.border = "red 1px solid"
          document.getElementById("erro_dataNascimento").style.display = "block"
          return false
          }
          document.getElementById("dataNascimento").style.border = "black 1px solid"
          document.getElementById("erro_dataNascimento").style.display = "none"
          return true
        }
      }
    }
  }


  verificar_cpf(){
    let cpfsInvalidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]
    let dig1:Number
    let dig2:Number
    let cpf = this.data.cpf
    let cpflista = []
    let pesos = [10,9,8,7,6,5,4,3,2] // utilizado para multiplicar os numeros do cpf
    let soma = 0 // calcula os necessarios para validação

    if(cpf == ""){
      document.getElementById("cadastroPF").style.border = "red 1px solid"
      document.getElementById("vazio_cpf").style.display = "block"
      return false
    }
    else{
      document.getElementById("cadastroPF").style.border = "black 1px solid"
      document.getElementById("vazio_cpf").style.display = "none"
    }


    if(cpfsInvalidos.indexOf(cpf) != -1){
      return false
    }
    if(cpf.length == 11){ // valida o tamanho
      cpflista = cpf.split("")
      for(let i = 0; i < cpf.length-2; i++){ 
        soma += Number(cpflista[i])*pesos[i] // calcula a soma para o primeiro digito de validação
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


  verificar_cnpj(){
    let cnpjsInvalidos = ["00000000000000", "11111111111111","22222222222222","33333333333333", "44444444444444", "55555555555555", "66666666666666", "77777777777777", "88888888888888", "99999999999999"]
    let dig1:Number
    let dig2:Number
    let cnpj = this.data.cnpj
    let cnpjLista = []
    let pesos = [5,4,3,2,9,8,7,6,5,4,3,2]
    let soma = 0

    if(cnpj == ""){
      document.getElementById("cadastroNPJ").style.border = "red 1px solid"
      document.getElementById("vazio_cnpj").style.display = "block"
      return false
    }
    else{
      document.getElementById("cadastroNPJ").style.border = "black 1px solid"
      document.getElementById("vazio_cnpj").style.display = "none"
    }

    if(cnpjsInvalidos.indexOf(cnpj) != -1){
      return false
    }
    if(cnpj.length == 14){
      cnpjLista = cnpj.split("")
      for(let i = 0; i < cnpj.length-2; i++){ 
        soma += Number(cnpjLista[i])*pesos[i]
      }
      dig1 = 11 - (soma % 11)
      if(dig1 > 9){
        dig1 = 0
      }
      if(dig1 == cnpjLista[12]){
        pesos.unshift(6)
        soma = 0
        for(let i = 0; i < cnpj.length-1; i++){ 
          cnpjLista[i] = parseInt(cnpjLista[i])
          soma += Number(cnpjLista[i])*pesos[i]
        }
        dig2 = 11 - (soma % 11)
        if(dig2 > 9){
          dig2 = 0
        }
        if(dig2 == cnpjLista[13]){
          document.getElementById("cadastroNPJ").style.border = "black 1px solid"
          document.getElementById("erro_cnpj").style.display = "none"
          return true
        }
        document.getElementById("cadastroNPJ").style.border = "red 1px solid"
        document.getElementById("erro_cnpj").style.display = "block"
        return false
      }
      document.getElementById("cadastroNPJ").style.border = "red 1px solid"
      document.getElementById("erro_cnpj").style.display = "block"
      return false
    }
    document.getElementById("cadastroNPJ").style.border = "red 1px solid"
    document.getElementById("erro_cnpj").style.display = "block"
    return false
  }

  verificar_razaoSocial(){
    let razaoSocial = this.data.razao_social
    if(razaoSocial == ""){
      document.getElementById("razaoSocial").style.border = "red 1px solid"
      document.getElementById("vazio_razaoSocial").style.display = "block"
      return false
    }
    else{
      document.getElementById("razaoSocial").style.border = "black 1px solid"
      document.getElementById("vazio_razaoSocial").style.display = "none"
      return true
    }
  }


  verificar_nomeComercial(){
    let nomeComercial = this.data.nome_comercial
    if(nomeComercial == ""){
      document.getElementById("nomeComercial").style.border = "red 1px solid"
      document.getElementById("vazio_nomeComercial").style.display = "block"
      return false
    }
    else{
      document.getElementById("nomeComercial").style.border = "black 1px solid"
      document.getElementById("vazio_nomeComercial").style.display = "none"
      return true
    }
  }

  verificar_inscricaoEstadual(){
    let inscricaoEstadual = this.data.inscricao_estadual
    if(inscricaoEstadual == ""){
      document.getElementById("inscricaoEstadual").style.border = "red 1px solid"
      document.getElementById("vazio_inscricaoEstadual").style.display = "block"
      return false
    }
    else{
      document.getElementById("inscricaoEstadual").style.border = "black 1px solid"
      document.getElementById("vazio_inscricaoEstadual").style.display = "none"
      return true
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
    document.getElementById("botaoCPF").style.display = "block"
    document.getElementById("botaoCNPJ").style.display = "none"
  }


  cnpj() {
    document.getElementById("cpf").style.display = "none"
    document.getElementById("nascimento").style.display = "none"
    document.getElementById("cnpj").style.display = "block"
    document.getElementById("botaoCPF").style.display = "none"
    document.getElementById("botaoCNPJ").style.display = "block"
  }
  
}
