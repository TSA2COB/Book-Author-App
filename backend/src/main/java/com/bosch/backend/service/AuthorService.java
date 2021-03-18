package com.bosch.backend.service;

import java.util.List;

import com.bosch.backend.entities.Author;

public interface AuthorService {
	
	public List<Author> getAllAuthors();
	public Author getAuthorById(String id);
	public Author addAuthor(Author author);
	public Author updateAuthor(String id, Author author);
	public void deleteAuthor(String id);
	
}
