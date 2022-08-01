package com.simplilearn.workshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.workshop.domain.Todo;
import com.simplilearn.workshop.repository.TodoRepository;

@Service(value = "todoService")
public class TodoServiceImpl implements TodoService{

	// This is the dependency
	// Depends on TodoRepository
	// TodoRepository repositoryImpl = new TodoRepositoryImpl(); // Old Code

	@Autowired
	private TodoRepository repositoryImpl;
	// Autowire by name - repositoryImpl
	// Autowire by type - TodoRepository

	// Spring Default Constructor - Autowire by default
	public TodoServiceImpl() {

	}

	// DI using Constructor
	public TodoServiceImpl(TodoRepository repositoryImpl) {
		System.out.println("Spring container called this constructor to Assemble the TodoRepository bean");
		this.repositoryImpl = repositoryImpl;
	}

	// DI using Setter Methods
	public void setRepositoryImpl(TodoRepository repositoryImpl) {
		System.out.println("Spring container called this setter method to Assemble the TodoRepository bean");
		this.repositoryImpl = repositoryImpl;
	}

	@Override
	public List<Todo> findAll() {
		return repositoryImpl.findAll();
	}

	@Override
	public Todo save(Todo theTodo) {
		return repositoryImpl.save(theTodo);
	}

	@Override
	public Todo deleteById(long theId) {
		repositoryImpl.deleteById(theId);
		return null;
	}

	@Override
	public Todo findById(long theId) {
		return repositoryImpl.findById(theId).get();
	}

}
