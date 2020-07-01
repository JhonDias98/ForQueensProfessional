package com.forqueensprofessional.forqueens.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.ForeignKey;

@Entity
@Table(name = "Pedido")
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long codigoPedido;
	
	@NotNull
	@Size(max=45)
	private String tipoEntrega;
	
	@NotNull
	private Date dataCompra = new java.sql.Date(System.currentTimeMillis());
	
	@NotNull
	private double valor;
	
	@NotNull
	private int qtdProduto;
	
	@ManyToOne
	@JoinColumn(foreignKey = @ForeignKey(name = "cliente_fk"))
	private Usuario usuario;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(foreignKey = @ForeignKey(name = "produto_fk"))
	private List<Produto> produtos = new ArrayList<Produto>();

    @Transient
	private List<Long> prods = new ArrayList<Long>();

	public long getCodigoPedido() {
		return codigoPedido;
	}

	public void setCodigoPedido(long codigoPedido) {
		this.codigoPedido = codigoPedido;
	}

	public String getTipoEntrega() {
		return tipoEntrega;
	}

	public void setTipoEntrega(String tipoEntrega) {
		this.tipoEntrega = tipoEntrega;
	}

	public Date getDataCompra() {
		return dataCompra;
	}

	public void setDataCompra(Date dataCompra) {
		this.dataCompra = dataCompra;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public int getQtdProduto() {
		return qtdProduto;
	}

	public void setQtdProduto(int qtdProduto) {
		this.qtdProduto = qtdProduto;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	public List<Produto> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}

	public List<Long> getProds() {
		return prods;
	}

	public void setProds(List<Long> prods) {
		this.prods = prods;
	}
}
