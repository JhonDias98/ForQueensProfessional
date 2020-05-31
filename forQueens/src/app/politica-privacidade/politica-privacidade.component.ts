import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.accordion()
    window.scroll(0, 0)
  }

  accordion() {
    let acc = document.getElementsByClassName("accordion_politica");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
