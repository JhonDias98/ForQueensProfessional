package com.forqueensprofessional.forqueens.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forqueensprofessional.forqueens.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{
	
	public List<Contato> findAllByAssuntoContainingIgnoreCase(String assunto);
}
