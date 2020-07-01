package com.forqueensprofessional.forqueens.model;

public class UserLogin {

		private long id;
		
		private long cpf;
		
		private String usuario;
		
		private String nome;
		
		private String celular;
		
		private String dataNascimento;
		
		private String senha;
		
		private String token;

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public long getCpf() {
			return cpf;
		}

		public void setCpf(long cpf) {
			this.cpf = cpf;
		}

		public String getUsuario() {
			return usuario;
		}

		public void setUsuario(String usuario) {
			this.usuario = usuario;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getCelular() {
			return celular;
		}

		public void setCelular(String celular) {
			this.celular = celular;
		}

		public String getDataNascimento() {
			return dataNascimento;
		}

		public void setDataNascimento(String dataNascimento) {
			this.dataNascimento = dataNascimento;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}
}
