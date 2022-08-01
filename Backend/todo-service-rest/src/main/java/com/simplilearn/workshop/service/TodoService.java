package com.simplilearn.workshop.service;

import java.util.List;

import com.simplilearn.workshop.domain.Todo;

public interface TodoService {

	public List<Todo> findAll();
	public Todo save (Todo theTodo);
	public Todo deleteById(long theId);
	public Todo findById(long theId);
}
