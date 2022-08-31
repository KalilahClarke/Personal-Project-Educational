DROP DATABASE IF EXISTS rock_star;
CREATE DATABASE rock_star; 

\c rock_star; 



CREATE TABLE rocks(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  color TEXT NOT NULL,
  luster TEXT NOT NULL,
  hardness INT,
  streak TEXT NOT NULL,
  breakage TEXT NOT NULL,
  magnetic BOOLEEN false,
  image TEXT
  info TEXT NOT NULL,
)