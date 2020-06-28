import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get("http://localhost:8080/produtos")
  }

  getByIdProduto(codigoProduto: number) {
    return this.http.get(`http://localhost:8080/produtos/${codigoProduto}`)
  }

  findByNome(nomeProduto: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nomeProduto}`)
  }


  postProduto(produto: Produto) {
    return this.http.post("http://localhost:8080/produtos", produto)
  }

  putProduto(produto: Produto) {
    return this.http.put("http://localhost:8080/produtos", produto)
  }

  delete(codigoProduto: number) {
    return this.http.delete(`http://localhost:8080/produtos/${codigoProduto}`)
  }

}
