package com.forqueensprofessional.forqueens.service;

import java.nio.charset.Charset;
import java.util.Optional;
import org.apache.commons.codec.binary.Base64;
import com.forqueensprofessional.forqueens.model.UserLogin;
import com.forqueensprofessional.forqueens.model.Usuario;
import com.forqueensprofessional.forqueens.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	public Usuario CadastrarUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		
		return repository.save(usuario);
	}
	
	public Usuario AtualizarUsuario(Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		
		return repository.save(usuario);
	}
	
	public Optional<UserLogin> Logar(UserLogin userLogin){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		Optional<Usuario> usuario = repository.findByUsuario(userLogin.getUsuario());
		
		if(usuario.isPresent() == false) {
			return Optional.empty();
		}
			
		if(encoder.matches(userLogin.getSenha(), usuario.get().getSenha()) == false) {
			return Optional.empty();
		}
		
		String auth = userLogin.getUsuario() + ":" + userLogin.getSenha();
		byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
		String authHeader = "Basic " + new String(encodedAuth);
				
		UserLogin userLogado = new UserLogin();
		
		userLogado.setId(usuario.get().getId());
		userLogado.setCpf(usuario.get().getCpf());
		userLogado.setUsuario(usuario.get().getUsuario());
		userLogado.setNome(usuario.get().getNome());
		userLogado.setCelular(usuario.get().getCelular());
		userLogado.setDataNascimento(usuario.get().getDataNascimento());
		userLogado.setSenha(usuario.get().getSenha());
		userLogado.setToken(authHeader);
				
		return Optional.ofNullable(userLogado);
	}
}