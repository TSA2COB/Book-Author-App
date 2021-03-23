package com.bosch.backend.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "authorities")
public class Authorities {
	
	private String username;
	private String authority;
	
	@ManyToOne
	@JoinColumn(name = "ix_auth_username", nullable = false)
	private Users users;
	
	public Authorities() {
		super();
	}
	
	public Authorities(String username, String authority, Users users) {
		super();
		this.username = username;
		this.authority = authority;
		this.users = users;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Authorities [username=" + username + ", authority=" + authority + ", users=" + users + "]";
	}
}
