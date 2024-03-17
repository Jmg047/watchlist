CREATE DATABASE IF NOT EXISTS mediadb;
USE mediadb;

CREATE TABLE `mediadb`.`shows` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `cover` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

