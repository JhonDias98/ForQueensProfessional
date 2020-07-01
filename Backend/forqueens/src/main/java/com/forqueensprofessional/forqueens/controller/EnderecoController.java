package com.forqueensprofessional.forqueens.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forqueensprofessional.forqueens.model.Endereco;
import com.forqueensprofessional.forqueens.repository.EnderecoRepository;
import com.forqueensprofessional.forqueens.service.EnderecoService;


	@RestController
	@RequestMapping("/endereco")
	@CrossOrigin("*")
	public class EnderecoController {
			@Autowired
			private EnderecoRepository repository;
			
			@Autowired
			private EnderecoService enderecoService;
			
			@GetMapping
			public ResponseEntity<List<Endereco>> GetAll(){
				return ResponseEntity.ok(repository.findAll());
			}
			
			@GetMapping("/{id}")
			public ResponseEntity<Endereco> getById(@PathVariable long id ){
				return repository.findById(id)
						.map(resp -> ResponseEntity.ok(resp))
						.orElse(ResponseEntity.notFound().build());
			}
			
			@GetMapping("/endereco/{cep}")
			public ResponseEntity<List<Endereco>> getByTitulo(@PathVariable int cep){
				return ResponseEntity.ok(repository.findAllByCep(cep));
			}
			
			@GetMapping("/meus/{idUsuario}")
			public ResponseEntity<List<Endereco>> getEndUser(@PathVariable Long idUsuario) {
				return ResponseEntity.status(HttpStatus.OK).body(enderecoService.meusEnderecos(idUsuario));
			}
			
			
			@PostMapping
			public ResponseEntity<Endereco> post(@RequestBody Endereco endereco){
				return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(endereco));
			}
			
			@PostMapping("/{idUsuario}")
			public ResponseEntity<List<Endereco>> postEndUser(@RequestBody Endereco endereco, @PathVariable Long idUsuario){
				return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.salvar(endereco,idUsuario));
			}
			
			@PutMapping
			public ResponseEntity<Endereco> put(@RequestBody Endereco endereco){
				return ResponseEntity.status(HttpStatus.OK).body(repository.save(endereco));
			}
			
			@DeleteMapping("/{id}")
			public void delete(@PathVariable Long id) {
				repository.deleteById(id);
			}
}
