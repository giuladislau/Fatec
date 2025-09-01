<?php 
    
    // PÓS-INCREMENTO
    $v = 10; 
    $a = $v++; // = 10
    $v++; // = 11
    echo"$a :: $v"; //$a = 10 e $v = 12


    // PRÉ-INCREMENTO
    $v = 10; 
    $a = ++$v; // = 11
    ++$v; // = 12
    echo"$a :: $v"; // $a = 11 e $v = 12


    // OPERADOR TERNÁRIO
    $valor = 1000;
    $v = ($valor >= 1000) ? ($valor * 1.5) : ($valor * 2.5);
    //condição de teste     //verdadeiro     //falso
    
    if($valor >= 1000){
        $v = $valor*1.5;
    }else{
        $v = $valor*2.5;
    }
    echo"If/Else: $v <br>";

    // OPERADOR ARITMÉTICO
    $num1 = 20;
    $num2 = 2;
    echo "Soma: ".($num1+$num2)."<br>";
    echo "Subtração: ".($num1 - $num2)."<br>";
    echo "Multiplicação: ".($num1 * $num2)."<br>";
    echo "Divisão: ".($num1 / $num2)."<br>";
    echo "Módulo: ".($num1 % $num2)."<br>";
?>