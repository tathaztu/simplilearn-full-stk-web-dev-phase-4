package com.simplilearn.workshop.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	// HTTP Method: Get
	// URI: /hello-world
	@RequestMapping(path="/hello-world", method=RequestMethod.GET)
	public String helloWorld() {
		return "Hello World";
	}

	// HTTP Method: Get
	// URI: /hello-world-bean
	@GetMapping(path = "/hello-world-object")
	public HelloWorldBean helloWorldBean() {
		// return new HelloWorldBean("Hello World");
		throw new RuntimeException("Some error occurred! Contact Support @customercare");
	}

	// HTTP Method: GET
	// URI: /hello-world/path-variable/vinodh
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}

}
