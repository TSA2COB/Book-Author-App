package com.bosch.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bosch.backend.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
}
