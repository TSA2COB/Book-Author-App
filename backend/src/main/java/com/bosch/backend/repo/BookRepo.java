package com.bosch.backend.repo;

import org.springframework.data.repository.CrudRepository;

import com.bosch.backend.entities.Book;

public interface BookRepo extends CrudRepository<Book, String> {

}
