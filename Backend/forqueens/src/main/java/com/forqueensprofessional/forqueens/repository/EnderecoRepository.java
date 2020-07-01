package com.forqueensprofessional.forqueens.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.forqueensprofessional.forqueens.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	
	public List<Endereco> findAllByCep(int cep);
}
