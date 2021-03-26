package com.bosch.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.bosch.backend.entities.Author;
import com.bosch.backend.service.AuthorService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	@GetMapping("/authors")
	public List<Author> getAllAuthors() {
		return authorService.getAllAuthors();
	}
	
	@GetMapping("/authors/{id}")
	public ResponseEntity<Author> getAuthorById(@PathVariable String id) {
		return ResponseEntity.ok(authorService.getAuthorById(id));
	}
	
	@PostMapping("/authors")
	public Author addAuthor(@RequestBody Author author) {
		return authorService.addAuthor(author);
	}
	
	@PutMapping("/authors/{id}")
	public Author updateAuthor(@RequestBody Author author, @PathVariable String id) {
		return authorService.updateAuthor(id, author);
	}
	
	@DeleteMapping("/authors/{id}")
	public void deletetAuthor(@PathVariable String id) {
		authorService.deleteAuthor(id);
	}
}
