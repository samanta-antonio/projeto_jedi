<?php
    require('db_connect.php');
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $nome = $_POST['nome'];
        $msg = $_POST['mensagem'];
        $email = $_POST['email'];

        $sql = "insert into clientes (nome, email) values ('$nome','$email');";
        semRetorno($sql);
        $sqlResultado = "select id_cliente from clientes where email = '$email'";
        $id_cliente = mysqli_fetch_assoc(comRetorno($sqlResultado));
        $sqlComentarios = "insert into comentarios (id_cliente, mensagem) values ('$id_cliente','$msg');";
        semRetorno($sqlComentarios);
        header ("Access-Control-Allow-Origin: * ");


    }
?>