<?php 
require('db_connect.php');
$andromeda = $_GET['andromeda'];
$sql = "select * from $andromeda";
$resultado = comRetorno ($sql);

$conteudo = json_encode(mysqli_fetch_all($resultado,MYSQL_ASSOC));
print_r ($conteudo);
header("Access-Control-Allow-Origin: * ")
?>

<!-- CONECTANDO FIM-->