DROP DATABASE IF EXISTS echoes_journal;
CREATE DATABASE echoes_journal; 

\c echoes_journal; 



CREATE TABLE journal(
  id SERIAL PRIMARY KEY,
  date TEXT NOT NULL,
  name TEXT NOT NULL,
  image TEXT,
  entryInfo TEXT NOT NULL
)