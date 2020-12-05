<?php 
require('db_connect.php');
$sql = "SELECT nome, mensagem FROM comentarios join clientes on clientes.id_cliente = comentarios.id_cliente;";
$resultado = comRetorno($sql);
$mensagens = [];
while($linha = mysqli_fetch_assoc($resultado)){
    $mensagens = $linha;
}

header("Access-Control-Allow-Origin: * ");

echo (json_encode($mensagens));
?>
