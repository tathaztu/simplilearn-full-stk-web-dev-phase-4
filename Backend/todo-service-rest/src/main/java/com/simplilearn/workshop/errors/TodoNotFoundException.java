package com.simplilearn.workshop.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class TodoNotFoundException extends RuntimeException {

	public TodoNotFoundException(String desc) {
		super(desc);
	}
}
