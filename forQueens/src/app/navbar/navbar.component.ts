import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch

  constructor() { }

  ngOnInit(): void {

    const busca = document.querySelector('.busca');

    busca.addEventListener('click', ()=> {
      document.getElementById("buscar").style.display="block"
    });
  }

}
