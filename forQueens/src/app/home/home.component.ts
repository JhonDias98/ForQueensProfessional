import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faShoppingBag = faShoppingBag
  faShoppingCart = faShoppingCart

  constructor( ) { }
  
  ngOnInit(): void {
    window.scroll(0, 0)

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
      target.forEach((element) => {
        if((windowTop) > (element as HTMLElement).offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
        
      })
    }

    window.addEventListener('scroll', () => {
      animeScroll()
    })
  }

}
