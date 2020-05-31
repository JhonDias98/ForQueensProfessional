import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.css']
})
export class DicasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
