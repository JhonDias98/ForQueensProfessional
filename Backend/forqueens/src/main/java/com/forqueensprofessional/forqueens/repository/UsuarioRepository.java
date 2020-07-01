package com.forqueensprofessional.forqueens.repository;

import java.util.Optional;
import com.forqueensprofessional.forqueens.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	public Optional<Usuario> findByUsuario(String usuario);
}
