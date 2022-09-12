DROP DATABASE IF EXISTS echoes_journal;
CREATE DATABASE echoes_journal; 

\c echoes_journal; 



CREATE TABLE journal(
  id SERIAL PRIMARY KEY,
  date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT,
  name TEXT NOT NULL,
  image TEXT,
  entry_info TEXT NOT NULL
)

-- psql -U postgres -f  db/schema.sql
