CREATE DATABASE blog;

DROP TYPE IF EXISTS user_type;

 CREATE TYPE user_type as ENUM (
        'Standard','Admin'
    );


CREATE TABLE tbl_users(
    userid serial,
    PRIMARY KEY (userid),
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    usertype user_type 
);



CREATE TABLE tbl_post(
    postid serial ,
    PRIMARY KEY(postid),
    user_id INTEGER REFERENCES tbl_users (userid) ON DELETE CASCADE,
    title VARCHAR(250),
    content VARCHAR(1000),
    tags VARCHAR(50),
    poststatus INTEGER,
  created_at TIMESTAMP  DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tbl_comment(
    commentid INT  PRIMARY KEY,
    user_id INTEGER REFERENCES tbl_users (userid),
    content VARCHAR(100),
    comment_status INTEGER,
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    author VARCHAR(50) REFERENCES tbl_users (username) ON DELETE CASCADE,
    post_id INTEGER REFERENCES tbl_post (postid) ON DELETE CASCADE
);



