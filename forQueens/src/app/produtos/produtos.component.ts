import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { Carrinho } from '../model/Carrinho';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  faSearch = faSearch
  faShoppingBag = faShoppingBag
  faShoppingCart = faShoppingCart

  listaCategoria: Categoria[];
  listaProduto: Produto[];
  produto: Produto = new Produto();

  descricaoC: string
  nomeProduto: string
  nomeInput: string
  pesquisa: boolean = false
  catCard: string

  produtoP = {
    nome: '',
    categotia: '',
    imagem: '',
    valor: 0
  }

  constructor(
    private categoriaService: CategoriaService, 
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    window.scroll(0, 0)

    this.findAllProdutos()
  }

  teclaEnter(event) {
    if (event.keyCode === 13) {
      this.buscarPorNome()
    }
  }

  adicionarAoCarrinho(produto: Produto) {
    const carrinho = new Carrinho(produto)
    this.carrinhoService.adicionarAoCarrinho(carrinho)
  }

  produtoId(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
      this.descricaoC = this.produto.categoria.descricao
      },
      (err) => {
        console.log(
          `Erro: ${err.status}, ocorreu um erro na busca pelo id do produto`
        );
      }
    );
  }

  buscarPorNome() {
    this.produtoService.findByNome(this.nomeInput).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      
    })
    
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
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
    document.getElementById("buscaProduto").style.display = "none"
  }

  getHidratante() {
    this.descricaoC = "Hidratante"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })
    document.getElementById("buscaProduto").style.display = "none"
  }

  getMascara() {
    this.descricaoC = "Mascara"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })
    document.getElementById("buscaProduto").style.display = "none"
  }
  
  getReconstrutor() {
    this.descricaoC = "Reconstrutor"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })
    document.getElementById("buscaProduto").style.display = "none"
  }

  getShampoo() {
    this.descricaoC = "Shampoo"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })
    document.getElementById("buscaProduto").style.display = "none"
  }

  getKit() {
    this.descricaoC = "Kit"
    this.categoriaService.findByName(this.descricaoC).subscribe((resp: Categoria[]) => {
      console.log(resp);
      this.listaCategoria = resp;
    }, err => {
      console.log(err)
    })
    document.getElementById("buscaProduto").style.display = "none"
  }

  getEssenceLiss() {
    this.nomeProduto = "Essence Liss"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

  getHoneyMilk() {
    this.nomeProduto = "Honey Milk"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

  getLuxuryGold() {
    this.nomeProduto = "Luxury Gold"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

  getNutritionRose() {
    this.nomeProduto = "Nutrition Rose"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

  getQQCream() {
    this.nomeProduto = "QQ Cream"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

  getSystemSave() {
    this.nomeProduto = "System Save"
    this.produtoService.findByNome(this.nomeProduto).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
      document.getElementById("buscaProduto").style.display = "block"
      document.getElementById("categorias").style.display = "none"
    })
  }

}