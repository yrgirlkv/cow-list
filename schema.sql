-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

drop database if exists cow_data;

-- CREATE YOUR DATABASE
create database if not exists cow_data;
-- CREATE YOUR TABLES
create table if not exists cows (
  id integer primary key not null auto_increment,
  name char(30),
  description char(240)
);

use cow_data;
select * from cows;
-- ADD RECORDS TO YOUR TABLE