<?php

//variáveis
$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//conexão
$conexao = mysqli_connect($url,$usuario,$senha,$base);

//arumar caracteres especiais
mysqli_set_charset($conexão, "utf8")

?>