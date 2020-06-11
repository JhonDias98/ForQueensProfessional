import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  faShoppingBag = faShoppingBag
  faShoppingCart = faShoppingCart

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)

  
  }

  escolhaTodos() {
    const todos = document.querySelector("#todos")
    const botox = document.querySelector("#botox")
    const hidratante = document.querySelector("#hidratante")
    const mascara = document.querySelector("#mascara")

    const produtoTodos = document.getElementById("produtoTodos")
    const produtoBotox = document.getElementById("produtoBotox")
    const produtoHidratante = document.getElementById("produtoHidratante")
    const produtoMascara = document.getElementById("produtoMascara")

    const catEscolhida = 'bg-active';

    if (todos.classList.contains(catEscolhida)) {
      todos.classList.remove(catEscolhida)
    } else {
      todos.classList.add(catEscolhida)
      botox.classList.remove(catEscolhida)
      hidratante.classList.remove(catEscolhida)
      mascara.classList.remove(catEscolhida)

      produtoTodos.style.display = "block"
      produtoBotox.style.display = "none"
      produtoHidratante.style.display = "none"
      produtoMascara.style.display = "none"
    }
  }


  escolhaBotox() {
    const todos = document.querySelector("#todos")
    const botox = document.querySelector("#botox")
    const hidratante = document.querySelector("#hidratante")
    const mascara = document.querySelector("#mascara")

    const produtoTodos = document.getElementById("produtoTodos")
    const produtoBotox = document.getElementById("produtoBotox")
    const produtoHidratante = document.getElementById("produtoHidratante")
    const produtoMascara = document.getElementById("produtoMascara")

    const catEscolhida = 'bg-active';

    if (botox.classList.contains(catEscolhida)) {
      botox.classList.remove(catEscolhida)
    } else {
      todos.classList.remove(catEscolhida)
      botox.classList.add(catEscolhida)
      hidratante.classList.remove(catEscolhida)
      mascara.classList.remove(catEscolhida)

      produtoTodos.style.display = "none"
      produtoBotox.style.display = "block"
      produtoHidratante.style.display = "none"
      produtoMascara.style.display = "none"
    }
  }

  escolhaHidratante() {
    const todos = document.querySelector("#todos")
    const botox = document.querySelector("#botox")
    const hidratante = document.querySelector("#hidratante")
    const mascara = document.querySelector("#mascara")

    const produtoTodos = document.getElementById("produtoTodos")
    const produtoBotox = document.getElementById("produtoBotox")
    const produtoHidratante = document.getElementById("produtoHidratante")
    const produtoMascara = document.getElementById("produtoMascara")

    const catEscolhida = 'bg-active';

    if (hidratante.classList.contains(catEscolhida)) {
      hidratante.classList.remove(catEscolhida)
    } else {
      todos.classList.remove(catEscolhida)
      botox.classList.remove(catEscolhida)
      hidratante.classList.add(catEscolhida)
      mascara.classList.remove(catEscolhida)

      produtoTodos.style.display = "none"
      produtoBotox.style.display = "none"
      produtoHidratante.style.display = "block"
      produtoMascara.style.display = "none"
    }
  }

  escolhaMascara() {
    const todos = document.querySelector("#todos")
    const botox = document.querySelector("#botox")
    const hidratante = document.querySelector("#hidratante")
    const mascara = document.querySelector("#mascara")

    const produtoTodos = document.getElementById("produtoTodos")
    const produtoBotox = document.getElementById("produtoBotox")
    const produtoHidratante = document.getElementById("produtoHidratante")
    const produtoMascara = document.getElementById("produtoMascara")

    const catEscolhida = 'bg-active';

    if (mascara.classList.contains(catEscolhida)) {
      mascara.classList.remove(catEscolhida)
    } else {
      todos.classList.remove(catEscolhida)
      botox.classList.remove(catEscolhida)
      hidratante.classList.remove(catEscolhida)
      mascara.classList.add(catEscolhida)

      produtoTodos.style.display = "none"
      produtoBotox.style.display = "none"
      produtoHidratante.style.display = "none"
      produtoMascara.style.display = "block"
    }
  }

}
