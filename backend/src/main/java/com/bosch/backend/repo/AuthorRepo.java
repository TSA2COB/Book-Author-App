package com.bosch.backend.repo;

import org.springframework.data.repository.CrudRepository;

import com.bosch.backend.entities.Author;

public interface AuthorRepo extends CrudRepository<Author, String> {

}
