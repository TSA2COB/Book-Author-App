package com.bosch.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bosch.backend.model.Authorities;
import com.bosch.backend.model.Users;

public interface UsersRepo extends JpaRepository<Users, String> {
	Optional<Users> findUsersByUserName(String username);
	Optional<Authorities> findAuthoritiesByUserName(String username);
}
