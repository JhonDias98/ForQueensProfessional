package com.forqueensprofessional.forqueens.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.forqueensprofessional.forqueens.model.Endereco;
import com.forqueensprofessional.forqueens.model.Usuario;
import com.forqueensprofessional.forqueens.repository.UsuarioRepository;

@Service
public class EnderecoService {

	@Autowired
    UsuarioRepository usuarioRepository;

    public List<Endereco> salvar(Endereco endereco, Long idUsuario) {

        Usuario usuario = usuarioRepository.findById(idUsuario).get();
        usuario.getEndereco().add(endereco);
        usuarioRepository.save(usuario);
        List<Endereco> lista = usuarioRepository.save(usuario).getEndereco();
        return lista;
    }
    
    public List<Endereco> meusEnderecos(Long idUsuario) {
		Usuario usuario = usuarioRepository.findById(idUsuario).get();
		List<Endereco> lista = usuarioRepository.save(usuario).getEndereco();
		return lista;
    }
}