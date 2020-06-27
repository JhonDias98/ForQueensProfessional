import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategorias() {
    return this.http.get("http://localhost:8080/categorias")
  }

  getByIdCategoria(codigoCategoria: number) {
    return this.http.get(`http://localhost:8080/categorias/${codigoCategoria}`)
  }

  findByName(descricao: string) {
    return this.http.get(`http://localhost:8080/categorias/nome/${descricao}`)
  }

  postCategoria(categoria: Categoria) {
    return this.http.post("http://localhost:8080/categorias", categoria)
  }

  putCategoria(categoria: Categoria) {
    return this.http.put("http://localhost:8080/categorias", categoria)
  }

  delete(codigoCategoria: number) {
    return this.http.delete(`http://localhost:8080/categorias/${codigoCategoria}`)
  }

  findByNome(descricao: string) {
    return this.http.get(`http://localhost:8080/categorias/nome/${descricao}`)
  }
}
