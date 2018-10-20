-- CREATE TABLE mytable (
--   product_id SERIAL PRIMARY KEY NOT NULL,
--   name varchar(40) NOT NULL,
--   description varchar(80) NOT NULL,
--   price integer NOT NULL,
--   image_url text NOT NULL
-- );

CREATE TABLE houser
(
    id SERIAL PRIMARY KEY,
    datname VARCHAR(50) NOT NULL,
    dataddress VARCHAR(50) NOT NULL,
    datstate VARCHAR(50) NOT NULL,
    datzip INTEGER
);
