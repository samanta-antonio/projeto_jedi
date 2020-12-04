
use andromeda;


create table comentarios(
id int auto_increment,
nome varchar (100),
msg  varchar (300),
email varchar (100),
data datetime default now(),
primary key (id)
)
