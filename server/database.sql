CREATE DATABASE blog;


 CREATE TYPE user_type as ENUM (
        'ADMIN','USER'
    );


CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE tbl_users(
    id INT GENERATED BY DEFAULT AS IDENTITY (START WITH 10 INCREMENT BY 10),
    id (PRIMARY KEY),
    username VARCHAR(50) UNIQUE NOT NULL,
    pass VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    usertype user_type
);

CREATE TABLE tbl_post(
    id INTEGER GENERATED BY DEFAULT AS IDENTITY (START WITH 10 INCREMENT BY 10) Primary Key,
    user_id INTEGER REFERENCES tbl_users (id),
    title VARCHAR(250),
    content VARCHAR(1000),
    tags VARCHAR(50),
    poststatus INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
);

CREATE TABLE tbl_comment(
    id INT GENERATED BY DEFAULT AS IDENTITY (START WITH 10 INCREMENT BY 10) PRIMARY KEY,
    user_id INTEGER REFERENCES tbl_users (id),
    content VARCHAR(100),
    comment_status INTEGER,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    author VARCHAR(50) REFERENCES tbl_users (username),
    post_id INTEGER REFERENCES tbl_post (id)
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON tbl_post
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();



