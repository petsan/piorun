DROP TABLE IF EXISTS piorun;

CREATE TABLE people (id SERiAL PRIMARY KEY, USER_NAME VARCHAR(255), email VARCHAR(255));

INSERT INTO people (USER_NAME, email) VALUES ('my_user', 'user@test.com');
