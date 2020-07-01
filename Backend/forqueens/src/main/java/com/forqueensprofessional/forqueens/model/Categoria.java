package com.forqueensprofessional.forqueens.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "Categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long codigoCategoria;
	
	@NotNull
	@Size(min = 2, max = 30)
	private String descricao;
	
	@OneToMany(mappedBy = "categoria",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("categoria")
	private List<Produto> produto;
	

	public long getCodigoCategoria() {
		return codigoCategoria;
	}


	public void setCodigoCategoria(long codigoCategoria) {
		this.codigoCategoria = codigoCategoria;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public List<Produto> getProduto() {
		return produto;
	}


	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}
	
}
