package com.forqueensprofessional.forqueens.controller;

import com.forqueensprofessional.forqueens.model.Pedido;
import com.forqueensprofessional.forqueens.repository.PedidoRepository;
import com.forqueensprofessional.forqueens.repository.ProdutoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin("*")
public class PedidoController {


	@Autowired
	private PedidoRepository repository;
    @Autowired
    private ProdutoRepository repositoryProd;
    
    @GetMapping
	public ResponseEntity<List<Pedido>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
    
    @GetMapping("/{codigoPedido}")
    public ResponseEntity<Pedido> getById(@PathVariable("codigoPedido") Long codigoPedido) {
        return repository.findById(codigoPedido)
                .map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }
    
	@PostMapping
	public ResponseEntity<Pedido> post(@RequestBody Pedido pedido) {
		for (Long id : pedido.getProds()) {
            pedido.getProdutos().add(repositoryProd.findById(id).get());
        }
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(pedido));
	}

	@PutMapping
	public ResponseEntity<Pedido> put(@RequestBody Pedido pedido) {
		for (Long id : pedido.getProds()) {
            pedido.getProdutos().add(repositoryProd.findById(id).get());
        }
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(pedido));
	}
}
