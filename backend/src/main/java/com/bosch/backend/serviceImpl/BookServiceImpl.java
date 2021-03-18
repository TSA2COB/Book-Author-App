package com.bosch.backend.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.backend.entities.Book;
import com.bosch.backend.repo.BookRepo;
import com.bosch.backend.service.BookService;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	BookRepo bookRepo;

	@Override
	public List<Book> getAllBooks() {
		List<Book> books = new ArrayList<>();
		bookRepo.findAll().forEach(books::add);
		return books;
	}

	@Override
	public Book getBookById(String id) {
		return bookRepo.findById(id).orElse(null);
	}

	@Override
	public Book addBook(Book book) {
		return bookRepo.save(book);
		
	}

	@Override
	public Book updateBook(String id, Book book) {
		return bookRepo.save(book);
		
	}

	@Override
	public void deleteBook(String id) {
		bookRepo.deleteById(id);
	}

}
