package com.simplilearn.workshop.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.simplilearn.workshop.domain.Todo;
import com.simplilearn.workshop.errors.TodoNotFoundException;
import com.simplilearn.workshop.service.TodoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoService todoService;

	// HTTP Method: GET
	// URI: /users/vinodh/todos

	@GetMapping(path="/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}

	// HTTP Method: GET
	// URI: /users/vinodh/1

	@GetMapping(path="/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable Integer id){
		Todo theTodo = todoService.findById(id);

		if(null == theTodo) {
			throw new TodoNotFoundException("Id - " + id);
		}
		return theTodo;
	}

	// HTTP Method: Put
	// URI: /users/{username}/todos/{id}
	@PutMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Object> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo theTodo) {
		Todo savedTodo = todoService.save(theTodo);

		return new ResponseEntity(theTodo, HttpStatus.OK);
	}


	// HTTP Post
	// URI: /users/vinodh/todos
	// Request Body -> JSON Data
	@PostMapping(path="/users/{username}/todos")
	public ResponseEntity<Object> createTodo(@PathVariable String username, @Valid @RequestBody Todo theTodo) {
		theTodo.setUsername(username);
		Todo savedTodo  = todoService.save(theTodo);


		// Response Header: Location
		// Status Code: 201
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedTodo.getId()).toUri();

		return ResponseEntity.created(location).build();
	}

	// HTTP Method: Delete
	// URI: /users/{username}/todos/{id}
	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Object> deleteTodo(@PathVariable String username, @PathVariable long id) {
		todoService.deleteById(id);

		return ResponseEntity.noContent().build();
	}
}
