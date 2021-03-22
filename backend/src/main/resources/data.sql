-- User user/pass
INSERT INTO users (username, password, enabled)
  values (
  	'admin',
    'admin',
    1);

INSERT INTO users (username, password, enabled)
  values (
  	'user',
    'user',
    1);

INSERT INTO authorities (username, authority)
  values ('admin', 'ROLE_ADMIN');
  
INSERT INTO authorities (username, authority)
  values ('user', 'ROLE_USER');
  