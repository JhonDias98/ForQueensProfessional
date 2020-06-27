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
  listaProduto: Produto[];
  produto: Produto = new Produto();

  descricaoC: string

  constructor(private categoriaService: CategoriaService, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    window.scroll(0, 0)

    this.getBotox()
  }

  produtoId(id: number) {
    this.produtoService.getByIdProduto(id).subscribe(
      (resp: Produto) => {
        this.produto = resp;
      },
      (err) => {
        console.log(
          `Erro: ${err.status}, ocorreu um erro na busca pelo id do produto`
        );
      }
    );
  }

  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    })
  }

  getBotox() {
    this.descricaoC = "Botox"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.add(categoriaAtiva);
      hidratante.classList.remove(categoriaAtiva);
      mascara.classList.remove(categoriaAtiva);
      reconstrutor.classList.remove(categoriaAtiva);
      shampoo.classList.remove(categoriaAtiva);
      kit.classList.remove(categoriaAtiva);
    }
    
  }

  getHidratante() {
    this.descricaoC = "Hidratante"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.remove(categoriaAtiva);
      hidratante.classList.add(categoriaAtiva);
      mascara.classList.remove(categoriaAtiva);
      reconstrutor.classList.remove(categoriaAtiva);
      shampoo.classList.remove(categoriaAtiva);
      kit.classList.remove(categoriaAtiva);
    }
  }

  getMascara() {
    this.descricaoC = "Mascara"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.remove(categoriaAtiva);
      hidratante.classList.remove(categoriaAtiva);
      mascara.classList.add(categoriaAtiva);
      reconstrutor.classList.remove(categoriaAtiva);
      shampoo.classList.remove(categoriaAtiva);
      kit.classList.remove(categoriaAtiva);
    }
  }
  
  getReconstrutor() {
    this.descricaoC = "Reconstrutor"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.remove(categoriaAtiva);
      hidratante.classList.remove(categoriaAtiva);
      mascara.classList.remove(categoriaAtiva);
      reconstrutor.classList.add(categoriaAtiva);
      shampoo.classList.remove(categoriaAtiva);
      kit.classList.remove(categoriaAtiva);
    }
  }

  getShampoo() {
    this.descricaoC = "Shampoo"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.remove(categoriaAtiva);
      hidratante.classList.remove(categoriaAtiva);
      mascara.classList.remove(categoriaAtiva);
      reconstrutor.classList.remove(categoriaAtiva);
      shampoo.classList.add(categoriaAtiva);
      kit.classList.remove(categoriaAtiva);
    }
  }

  getKit() {
    this.descricaoC = "Kit"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })

    let botox = document.querySelector(".botox");
    let hidratante = document.querySelector(".hidratante");
    let mascara = document.querySelector(".mascara");
    let reconstrutor = document.querySelector(".reconstrutor");
    let shampoo = document.querySelector(".shampoo");
    let kit = document.querySelector(".kit");
    let categoriaAtiva = "bg-active"
    if (mascara.classList.contains(categoriaAtiva)) {
      mascara.classList.remove(categoriaAtiva);
    } else {

      botox.classList.remove(categoriaAtiva);
      hidratante.classList.remove(categoriaAtiva);
      mascara.classList.remove(categoriaAtiva);
      reconstrutor.classList.remove(categoriaAtiva);
      shampoo.classList.remove(categoriaAtiva);
      kit.classList.add(categoriaAtiva);
    }
  }
}