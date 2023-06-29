DROP DATABASE IF EXISTS maranatha;
CREATE DATABASE maranatha;
USE maranatha; 

CREATE TABLE children (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cfname VARCHAR(50) NOT NULL,
    clname VARCHAR(50) NOT NULL,
    cdob DATE NOT NULL,
    pfname VARCHAR(50) NOT NULL,
    plname VARCHAR(50) NOT NULL,
    contact_number INT,
    home_address VARCHAR(255),
    email_address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


