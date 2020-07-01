package com.forqueensprofessional.forqueens.controller;

import java.util.List;
import com.forqueensprofessional.forqueens.model.UserLogin;
import com.forqueensprofessional.forqueens.model.Usuario;
import com.forqueensprofessional.forqueens.repository.UsuarioRepository;
import com.forqueensprofessional.forqueens.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll(){
		return ResponseEntity.ok(usuarioRepository.findAll());
	}
	
	@PostMapping("/logar")
	public ResponseEntity<UserLogin> Autentication(@RequestBody UserLogin user) {
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarUsuario(usuario));
	}
	
	@PutMapping
	public ResponseEntity<Usuario> put(@RequestBody Usuario usuario){
		Usuario user = new Usuario();
		user.setId(usuario.getId());
		user.setCpf(usuario.getCpf());
		user.setUsuario(usuario.getUsuario());
		user.setNome(usuario.getNome());
		user.setCelular(usuario.getCelular());
		user.setDataNascimento(usuario.getDataNascimento());
		user.setSenha(usuario.getSenha());
		user.setEndereco(usuario.getEndereco());
		
		return ResponseEntity.status(HttpStatus.OK).body(usuarioService.AtualizarUsuario(user));
	}
}
