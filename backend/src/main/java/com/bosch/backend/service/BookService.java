package com.bosch.backend.service;

import java.util.List;

import com.bosch.backend.entities.Book;

public interface BookService {
	
	public List<Book> getAllBooks();
	public Book getBookById(String id);
	public Book addBook(Book book);
	public Book updateBook(String id, Book book);
	public void deleteBook(String id);

}
