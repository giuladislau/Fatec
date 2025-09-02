<?php
// arquivo: imc.php
// este arquivo recebe peso e altura e calcula o imc do paciente

// verifica se os dados foram enviados via post
if ($_POST) {
    
    // pega os valores enviados pelo formulario
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];
    
    // converte os valores para float (numero com casas decimais)
    $peso = floatval($peso);
    $altura = floatval($altura);
    
    // calcula o imc usando a formula: peso / (altura * altura)
    $imc = $peso / ($altura * $altura);
    
    // determina a situacao do paciente baseado na tabela de classificacao
    if ($imc < 18.5) {
        $situacao = "abaixo do peso";
    } elseif ($imc >= 18.5 && $imc <= 24.9) {
        $situacao = "Peso ideal (parabéns)";
    } elseif ($imc >= 25.0 && $imc <= 29.9) {
        $situacao = "Levemente acima do peso";
    } elseif ($imc >= 30.0 && $imc <= 34.9) {
        $situacao = "Obesidade grau I";
    } elseif ($imc >= 35.0 && $imc <= 39.9) {
        $situacao = "Obesidade grau II (severa)";
    } else {
        $situacao = "Obesidade III (mórbida)";
    }
    
} else {
    // se nao foram enviados dados via post, redireciona para a pagina inicial
    header('Location: index.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado - Calculadora de IMC</title>
    <style>
        /* mesmo estilo da pagina anterior para manter consistencia */
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        
        .resultado-principal {
            background-color: #e9f7ef;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 20px;
            border: 2px solid #27ae60;
        }
        
        .imc-valor {
            font-size: 32px;
            font-weight: bold;
            color: #27ae60;
            margin: 10px 0;
        }
        
        .situacao {
            font-size: 18px;
            font-weight: bold;
            color: #2c3e50;
            margin-top: 10px;
        }
        
        .detalhes {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .tabela-referencia {
            margin: 20px 0;
        }
        
        .tabela-referencia h3 {
            margin-bottom: 10px;
            color: #333;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        th, td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
        }
        
        th {
            background-color: #5bc0de;
            color: white;
        }
        
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        .botao-voltar {
            display: block;
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            text-align: center;
            border-radius: 5px;
            font-size: 16px;
        }
        
        .botao-voltar:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resultado do Cálculo de IMC</h1>
        
        <!-- mostra o resultado principal -->
        <div class="resultado-principal">
            <div class="imc-valor">IMC: <?php echo number_format($imc, 1, ',', '.'); ?></div>
            <div class="situacao"><?php echo $situacao; ?></div>
        </div>
        
        <!-- mostra os detalhes do calculo -->
        <div class="detalhes">
            <h3>Dados Informados:</h3>
            <p><strong>Peso:</strong> <?php echo number_format($peso, 1, ',', '.'); ?> kg</p>
            <p><strong>Altura:</strong> <?php echo number_format($altura, 2, ',', '.'); ?> m</p>
            <p><strong>Cálculo:</strong> <?php echo number_format($peso, 1, ',', '.'); ?> ÷ (<?php echo number_format($altura, 2, ',', '.'); ?> × <?php echo number_format($altura, 2, ',', '.'); ?>) = <?php echo number_format($imc, 1, ',', '.'); ?></p>
        </div>
        
        <!-- tabela de referencia -->
        <div class="tabela-referencia">
            <h3>Tabela de Referência:</h3>
            <table>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
                <tr>
                    <td>abaixo de 18,5</td>
                    <td>abaixo do peso</td>
                </tr>
                <tr>
                    <td>entre 18,5 e 24,9</td>
                    <td>Peso ideal (parabéns)</td>
                </tr>
                <tr>
                    <td>entre 25,0 e 29,9</td>
                    <td>Levemente acima do peso</td>
                </tr>
                <tr>
                    <td>entre 30,0 e 34,9</td>
                    <td>Obesidade grau I</td>
                </tr>
                <tr>
                    <td>entre 35,0 e 39,9</td>
                    <td>Obesidade grau II (severa)</td>
                </tr>
                <tr>
                    <td>acima de 40</td>
                    <td>Obesidade III (mórbida)</td>
                </tr>
            </table>
        </div>
        
        <!-- botao para voltar e fazer novo calculo -->
        <a href="index.html" class="botao-voltar">Calcular Novamente</a>
    </div>
</body>
</html>