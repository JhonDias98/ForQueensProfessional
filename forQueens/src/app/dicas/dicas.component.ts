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
    this.essenceLiss.nativeElement.play();
  }
  q_nano(){
    this.qNano.nativeElement.play();
  }
  nutrition_rose(){
    this.nutritionRose.nativeElement.play();
  }
  qq_cream(){
    this.qqCream.nativeElement.play();
  }
  pausa_video_liss(){
    const video = document.getElementById("essence_Liss");
    this.qqCream.nativeElement.pause();
    this.nutritionRose.nativeElement.pause();
    this.qNano.nativeElement.pause();
    this.essenceLiss.nativeElement.pause();  
  }
  pausa_video_qnano(){
    const video = document.getElementById("q_Nano");
    this.qqCream.nativeElement.pause();
    this.nutritionRose.nativeElement.pause();
    this.qNano.nativeElement.pause();
    this.essenceLiss.nativeElement.pause();  
  }
  pausa_video_nutrition(){
    const video = document.getElementById("nutrition_Rose");
    this.qqCream.nativeElement.pause();
    this.nutritionRose.nativeElement.pause();
    this.qNano.nativeElement.pause();
    this.essenceLiss.nativeElement.pause();  
  }
  pausa_video_qq(){
    const video = document.getElementById("qq_Cream");
    this.qqCream.nativeElement.pause();
    this.nutritionRose.nativeElement.pause();
    this.qNano.nativeElement.pause();
    this.essenceLiss.nativeElement.pause();  
  }
}
