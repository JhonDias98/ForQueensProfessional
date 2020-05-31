import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faPhoneAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

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

  faFacebookSquare = faFacebookSquare
  faWhatsapp = faWhatsapp
  faInstagram = faInstagram

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
