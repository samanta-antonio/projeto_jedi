use andromeda;


create table pedidos(
id int auto_increment,
nome varchar(100),
endereco varchar(500),
email varchar(500),
telefone varchar(50),
produto varchar(500),
quantidade float,
primary key (id)
);

SELECT * from andromeda.pedidos;

insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Marina Belo","Rua Vial, 23, Prudente-SP,03450211","mar.ina@ig.com","2326-0987","2",1);


insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Iago Maruline","Rua 12 de Maio, 578, Santos-SP,023203340","iagojr@ig.com","118926-0857","7",1);

insert into pedidos (nome, endereco,email, telefone, produto, quantidade)
values ("Jordana Bilis Reis","Av.Esperança, 890, Assis-SP,09802345","jordanabili@ig.com","14557302349","2",3);