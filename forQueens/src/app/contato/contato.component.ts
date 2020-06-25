import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faPhoneAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faPhoneAlt = faPhoneAlt
  faQuestionCircle = faQuestionCircle
  faPencilAlt = faPencilAlt
  faComment = faComment

  faFacebookSquare = faFacebookSquare
  faWhatsapp = faWhatsapp
  faInstagram = faInstagram

  contato = {
    email:'',
    nome: '',
    assunto: null,
    telefone: '',
    celular: '',
    mensagem: ''
  }

  contatoAPI: Contato = new Contato

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  enviarContato() {
    this.contatoService.postContato(this.contatoAPI).subscribe((resp: Contato) => {
      this.contatoAPI = resp;
      window.alert("Mensagem enviada")
      location.assign("/contato")
    })
  }


  validar_celular(){
    let erros = []
    erros.push(this.verificar_email())
    erros.push(this.verificar_nome())
    erros.push(this.verificar_assunto())
    erros.push(this.verificar_celular())
    erros.push(this.verificar_mensagem())
    if (erros.indexOf(false) == -1){
      alert('Contato enviado com sucesso')
    }
  }

  validar_telefone(){
    let erros = []
    erros.push(this.verificar_email())
    erros.push(this.verificar_nome())
    erros.push(this.verificar_assunto())
    erros.push(this.verificar_telefone())
    erros.push(this.verificar_mensagem())
    if (erros.indexOf(false) == -1){
      alert('Contato enviado com sucesso')
    }
  }

  verificar_email(){
    let email = this.contato.email
    if(email == ""){
      document.getElementById("email_contato").style.border = "red 1px solid"
      document.getElementById("vazio_email_contato").style.display = "block"
      return false
    }
    else{
      document.getElementById("email_contato").style.border = "black 1px solid"
      document.getElementById("vazio_email_contato").style.display = "none"
    }
    if(email.match(/^[\w.-]+@[\w.-]+$/)){
      let emailLista = email.split("")
        if(emailLista.indexOf(".") != -1){
            email = emailLista.join("")
            emailLista = email.split(".")
            if(emailLista.indexOf("com") != -1){
              document.getElementById("email_contato").style.border = "black 1px solid"
              document.getElementById("erro_email_contato").style.display = "none"
              return true
            }
            document.getElementById("email_contato").style.border = "red 1px solid"
            document.getElementById("erro_email_contato").style.display = "block"
            return false
        }
        document.getElementById("email_contato").style.border = "red 1px solid"
        document.getElementById("erro_email_contato").style.display = "block"
        return false
    }
    document.getElementById("email_contato").style.border = "red 1px solid"
    document.getElementById("erro_email_contato").style.display = "block"
    return false
  }

  verificar_nome(){
    let nome = this.contato.nome
    if(nome == ""){
      document.getElementById("nome_contato").style.border = "red 1px solid"
      document.getElementById("vazio_nome_contato").style.display = "block"
      return false
    }
    else{
      document.getElementById("nome_contato").style.border = "black 1px solid"
      document.getElementById("vazio_nome_contato").style.display = "none"
    }
    nome.split("")
    if(nome.length < 5 || nome.indexOf(" ") == -1){
      document.getElementById("nome_contato").style.border = "red 1px solid"
      document.getElementById("erro_nome_contato").style.display = "block"
      return false
    }
    else{
      document.getElementById("nome_contato").style.border = "black 1px solid"
      document.getElementById("erro_nome_contato").style.display = "none"
      return true
    }
  }

  verificar_assunto(){
    let assunto = this.contato.assunto
    console.log(assunto)
    if(assunto == ""){
      document.getElementById("assunto").style.border = "red 1px solid"
      document.getElementById("vazio_assunto").style.display = "block"
      return false
    }
    else{
      document.getElementById("assunto").style.border = "black 1px solid"
      document.getElementById("vazio_assunto").style.display = "none"
      return true
    }
  }

  verificar_mensagem(){
    let mensagem = this.contato.mensagem
    console.log(mensagem)
    if(mensagem == ""){
      document.getElementById("mensagem").style.border = "red 1px solid"
      document.getElementById("vazio_mensagem").style.display = "block"
      return false
    }
    else{
      document.getElementById("mensagem").style.border = "black 1px solid"
      document.getElementById("vazio_mensagem").style.display = "none"
      return true
    }
  }

  verificar_telefone(){
    let telefone = this.contato.telefone
    if(telefone == ""){
      document.getElementById("telefoneinput").style.border = "red 1px solid"
      document.getElementById("vazio_telefone").style.display = "block"
      return false
    }
    if(telefone.length != 10){
      document.getElementById("telefoneinput").style.border = "red 1px solid"
      document.getElementById("erro_telefone").style.display = "block"
      return false
    }
    else{
      document.getElementById("telefoneinput").style.border = "black 1px solid"
      document.getElementById("vazio_telefone").style.display = "none"
      return true
    }
  }

  verificar_celular(){
    let celular = this.contato.celular
    if(celular == ""){
      document.getElementById("celularinput").style.border = "red 1px solid"
      document.getElementById("vazio_celular").style.display = "block"
      return false
    }
    if(celular.length != 10){
      document.getElementById("celularinput").style.border = "red 1px solid"
      document.getElementById("erro_celular").style.display = "block"
      return false
    }
    else{
      document.getElementById("celularinput").style.border = "black 1px solid"
      document.getElementById("vazio_celular").style.display = "none"
      return true
    }
  }



  telefone() {
    document.getElementById("telefone").style.display = "flex"
    document.getElementById("celular").style.display = "none"
    document.getElementById("botaotelefone").style.display = "flex"
    document.getElementById("botaocelular").style.display = "none"
    document.getElementById("erro_celular").style.display = "none"
    document.getElementById("vazio_celular").style.display = "none"
  }


  celular() {
    document.getElementById("telefone").style.display = "none"
    document.getElementById("celular").style.display = "flex"
    document.getElementById("botaotelefone").style.display = "none"
    document.getElementById("botaocelular").style.display = "flex"
    document.getElementById("erro_telefone").style.display = "none"
    document.getElementById("vazio_telefone").style.display = "none"
  }

}
