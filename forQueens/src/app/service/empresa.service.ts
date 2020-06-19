import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  getAllEmpresas() {
    return this.http.get("http://localhost:8080/empresas")
  }

  getByIdEmpresa(cnpj: number) {
    return this.http.get(`http://localhost:8080/empresas/${cnpj}`)
  }

  findByNomeComercial(nomeComercial: string) {
    return this.http.get(`http://localhost:8080/empresas/nomecomercial/${nomeComercial}`)
  }

  postEmpresa(empresa: Empresa) {
    return this.http.post("http://localhost:8080/empresas", empresa)
  }

  putEmpresa(empresa: Empresa) {
    return this.http.put("http://localhost:8080/empresas", empresa)
  }

  delete(cnpj: number) {
    return this.http.delete(`http://localhost:8080/empresas/${cnpj}`)
  }

}
