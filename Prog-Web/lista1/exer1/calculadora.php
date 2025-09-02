<?php
// arquivo: calcular.php
// este arquivo recebe os dados do formulario e calcula qual combustivel e mais vantajoso

// verifica se os dados foram enviados via post
if ($_POST) {
    
    // pega os valores enviados pelo formulario
    $preco_alcool = $_POST['preco_alcool'];
    $preco_gasolina = $_POST['preco_gasolina'];
    
    // converte os valores para float (numero com casas decimais)
    $preco_alcool = floatval($preco_alcool);
    $preco_gasolina = floatval($preco_gasolina);
    
    // faz o calculo: divide o preco do alcool pelo preco da gasolina
    $resultado_calculo = $preco_alcool / $preco_gasolina;
    
    // verifica qual combustivel e mais vantajoso baseado na regra dos 0.7
    if ($resultado_calculo < 0.7) {
        $combustivel_recomendado = "álcool";
        $mensagem = "Use álcool! É mais vantajoso.";
        $classe_css = "alcool";
    } else {
        $combustivel_recomendado = "gasolina";
        $mensagem = "Use gasolina! É mais vantajosa.";
        $classe_css = "gasolina";
    }
    
    // formata o resultado do calculo para mostrar so 3 casas decimais
    $resultado_formatado = number_format($resultado_calculo, 3, ',', '.');
    
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
    <title>Resultado - Calculadora de Combustível</title>
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
        
        .resultado {
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .resultado.alcool {
            background-color: #d4edda;
            color: #155724;
            border: 2px solid #c3e6cb;
        }
        
        .resultado.gasolina {
            background-color: #f8d7da;
            color: #721c24;
            border: 2px solid #f5c6cb;
        }
        
        .detalhes {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
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
        <h1> Resultado do Cálculo</h1>
        
        <!-- mostra o resultado principal -->
        <div class="resultado <?php echo $classe_css; ?>">
            <?php echo $mensagem; ?>
        </div>
        
        <!-- mostra os detalhes do calculo -->
        <div class="detalhes">
            <h3>Detalhes do Cálculo:</h3>
            <p><strong>Preço do Álcool:</strong> R$ <?php echo number_format($preco_alcool, 2, ',', '.'); ?> por litro</p>
            <p><strong>Preço da Gasolina:</strong> R$ <?php echo number_format($preco_gasolina, 2, ',', '.'); ?> por litro</p>
            <p><strong>Resultado da Divisão:</strong> <?php echo $resultado_formatado; ?></p>
            <p><strong>Regra:</strong> Se o resultado for menor que 0,700, use álcool. Se for maior, use gasolina.</p>
        </div>
        
        <!-- botao para voltar e fazer novo calculo -->
        <a href="index.html" class="botao-voltar"> Fazer Novo Cálculo</a>
    </div>
</body>
</html>