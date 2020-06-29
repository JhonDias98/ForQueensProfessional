import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.css']
})
export class DicasComponent implements OnInit {
  modal = document.querySelector("modal");
  constructor() { }
  @ViewChild("essenceLiss", { static: false }) essenceLiss: ElementRef;
  @ViewChild("qNano", { static: false }) qNano: ElementRef;
  @ViewChild("nutritionRose", { static: false }) nutritionRose: ElementRef;
  @ViewChild("qqCream", { static: false }) qqCream: ElementRef;
  ngOnInit(): void {
    window.scroll(0, 0)
  }
  essence_liss(){
    const backdrop2 = document.getElementById("backdrop2");
    backdrop2.style.display="block"
    this.essenceLiss.nativeElement.play();
  }
  q_nano(){
    const backdrop2 = document.getElementById("backdrop2");
    backdrop2.style.display="block"
    this.qNano.nativeElement.play();
  }
  nutrition_rose(){
    const backdrop2 = document.getElementById("backdrop2");
    backdrop2.style.display="block"
    this.nutritionRose.nativeElement.play();
  }
  qq_cream(){
    const backdrop2 = document.getElementById("backdrop2");
    backdrop2.style.display="block"
    this.qqCream.nativeElement.play();
  }
  pausa_video(){
    this.qqCream.nativeElement.pause();
    this.nutritionRose.nativeElement.pause();
    this.qNano.nativeElement.pause();
    this.essenceLiss.nativeElement.pause();
    const backdrop2 = document.getElementById("backdrop2");
    backdrop2.style.display="none"
  }
}
