import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  faShoppingBag = faShoppingBag
  faShoppingCart = faShoppingCart

  listaCategoria: Categoria[];
  categoria: Categoria = new Categoria()

  listaProduto: Produto[];
  produto: Produto = new Produto()


  constructor(private categoriaService: CategoriaService, private produtoService: ProdutoService) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllCategoria()
    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  produtoId(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, ocorreu um erro na busca pelo id do produto`)
    })
  }

  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    })
  }

  categoriaId(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Produto) => {
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, ocorreu um erro na busca do id da categoria`)
    })
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
    this.categoriaId(1)
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
    this.categoriaId(2)
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
    this.categoriaId(3)
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
