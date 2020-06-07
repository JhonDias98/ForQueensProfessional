import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
      target.forEach((element) => {
        if ((windowTop) > (element as HTMLElement).offsetTop) {
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
