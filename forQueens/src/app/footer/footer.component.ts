import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebookSquare = faFacebookSquare
  faWhatsapp = faWhatsapp
  faInstagram = faInstagram

  constructor() { }

  ngOnInit(): void {
  }

  abrirMapa() {
    const mapa = document.querySelector('.mapSite');

    document.getElementById('maps').style.display="block"

    mapa.classList.toggle('mapSidebar-open')
    if (mapa.classList.contains('mapSidebar-open')) {
      mapa.classList.remove('mapSidebar-open')
    }
  }

}
