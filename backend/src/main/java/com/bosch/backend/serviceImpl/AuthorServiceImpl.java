package com.bosch.backend.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.backend.entities.Author;
import com.bosch.backend.repo.AuthorRepo;
import com.bosch.backend.service.AuthorService;

@Service
public class AuthorServiceImpl implements AuthorService{
	
	@Autowired
	AuthorRepo authorRepo;

	@Override
	public List<Author> getAllAuthors() {
		List<Author> authors = new ArrayList<>();
		authorRepo.findAll().forEach(authors::add);
		return authors;
	}

	@Override
	public Author getAuthorById(String id) {
		
		//return authorRepo.findById(id).orElse(null);
		
		// throw exception if not found:
		return authorRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Author not exist with ID: " + id));
		
		/*
		my code without using lambda
		Optional<Author> optional = authorRepo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		}
		else {
			return null;
		}
		*/
	}

	@Override
	public Author addAuthor(Author author) {
		return authorRepo.save(author);
		
	}

	@Override
	public Author updateAuthor(String id, Author author) {
		author.setId(id);
		return authorRepo.save(author);
		
	}

	@Override
	public void deleteAuthor(String id) {
		authorRepo.deleteById(id);
	}



}
