package com.bosch.backend.serviceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bosch.backend.model.MyUserDetails;
import com.bosch.backend.model.User;
import com.bosch.backend.repo.UserRepo;
import com.bosch.backend.service.MyUserDetailsService;

@Service
public class MyUserDetailsServiceImpl implements MyUserDetailsService {
	
	@Autowired
	UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<User> user = userRepo.findByUsername(username);
		
		user.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + username));
		
		return user.map(MyUserDetails::new).get();
		
	}

}
