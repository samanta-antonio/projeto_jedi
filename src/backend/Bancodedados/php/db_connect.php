<?php   
    function comRetorno($sql){

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "andromeda";

    // Criando conexão
    $connect = mysqli_connect($servername, $username, $password, $database);

    // Verificando a conexão
    if(!$connect){
        echo "Falha na conexão: "  . mysqli_connect_error;
    }

    mysqli_set_charset($connect, "utff8mb4");
    $resultado = mysqli_query($connect,$sql);
    mysqli_close($connect);
    return $resultado;
}

function semRetorno($sql){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "andro";

    $connect = mysqli_connect($servername, $username, $password, $database);
    ;

     if(!$connect){
        echo "Falha na conexão: "  . mysqli_connect_error;
     }

     mysqli_set_charsert($connect, "utff8mb4");
     mysqli_query($connect,$sql);
     mysqli_close($connect);

}
    

?>