package com.bosch.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.backend.entities.Book;
import com.bosch.backend.service.BookService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable String id) {
		return bookService.getBookById(id);
	}
	
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}
	
	@PutMapping("/books/{id}")
	public Book updateBook(@RequestBody Book book, @PathVariable String id) {
		return bookService.updateBook(id, book);
	}
	
	@DeleteMapping("/books/{id}")
	public void deletetBook(@PathVariable String id) {
		bookService.deleteBook(id);
	}

}
