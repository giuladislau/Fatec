<?php
// arquivo: conversor.php
// este arquivo recebe os dados do formulario e converte reais para outras moedas

// verifica se os dados foram enviados via post
if ($_POST) {
    
    // pega o valor em reais enviado pelo formulario
    $valor_real = $_POST['valor_real'];
    
    // pega as moedas selecionadas para conversao
    $moedas_selecionadas = isset($_POST['moedas']) ? $_POST['moedas'] : [];
    
    // converte o valor para float (numero com casas decimais)
    $valor_real = floatval($valor_real);
    
    // define as cotacoes das moedas (valores aproximados para fins didaticos)
    $cotacoes = [
        'dolar' => 5.44,  // 1 dolar = 5.44 reais
        'euro' => 6.37,   // 1 euro = 6.37 reais
        'libra' => 7.37   // 1 libra = 7.37 reais
    ];
    
    // informacoes sobre as moedas para exibicao
    $info_moedas = [
        'dolar' => ['nome' => 'Dólar Americano', 'simbolo' => 'USD', 'bandeira' => '🇺🇸'],
        'euro' => ['nome' => 'Euro', 'simbolo' => 'EUR', 'bandeira' => '🇪🇺'],
        'libra' => ['nome' => 'Libra Esterlina', 'simbolo' => 'GBP', 'bandeira' => '🇬🇧']
    ];
    
    // array para guardar os resultados das conversoes
    $resultados = [];
    
    // faz a conversao para cada moeda selecionada
    foreach ($moedas_selecionadas as $moeda) {
        if (isset($cotacoes[$moeda])) {
            // calcula o valor convertido: valor_real / cotacao
            $valor_convertido = $valor_real / $cotacoes[$moeda];
            
            // guarda o resultado no array
            $resultados[$moeda] = [
                'valor' => $valor_convertido,
                'cotacao' => $cotacoes[$moeda],
                'info' => $info_moedas[$moeda]
            ];
        }
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
    <title>Resultado - Conversor de Moedas</title>
    <style>
        /* mesmo estilo da pagina anterior para manter consistencia */
        body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
        }
        
        .valor-original {
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            font-size: 24px;
            font-weight: bold;
        }
        
        .resultado-conversao {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 5px solid #28a745;
            transition: transform 0.2s;
        }
        
        .resultado-conversao:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .moeda-header {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .bandeira {
            font-size: 24px;
            margin-right: 10px;
        }
        
        .nome-moeda {
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
        
        .valor-convertido {
            font-size: 32px;
            color: #28a745;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .detalhes-calculo {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
        }
        
        .detalhes-calculo h4 {
            margin: 0 0 10px 0;
            color: #495057;
        }
        
        .calculo-linha {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
            font-size: 14px;
        }
        
        .botao-voltar {
            display: block;
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
            color: white;
            text-decoration: none;
            text-align: center;
            border-radius: 10px;
            font-size: 18px;
            margin-top: 30px;
            transition: transform 0.2s;
            font-weight: bold;
        }
        
        .botao-voltar:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
            text-decoration: none;
            color: white;
        }
        
        .resumo-geral {
            background-color: #e7f3ff;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 2px solid #667eea;
        }
        
        .resumo-geral h3 {
            margin: 0 0 15px 0;
            color: #333;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1> Resultado da Conversão</h1>
        
        <!-- mostra o valor original em reais -->
        <div class="valor-original">
             R$ <?php echo number_format($valor_real, 2, ',', '.'); ?>
        </div>
        
        <?php if (!empty($resultados)): ?>
            <?php foreach ($resultados as $moeda => $dados): ?>
                <!-- mostra cada conversao -->
                <div class="resultado-conversao">
                    <div class="moeda-header">
                        <span class="bandeira"><?php echo $dados['info']['bandeira']; ?></span>
                        <span class="nome-moeda"><?php echo $dados['info']['nome']; ?> (<?php echo $dados['info']['simbolo']; ?>)</span>
                    </div>
                    
                    <div class="valor-convertido">
                        <?php echo $dados['info']['simbolo']; ?> <?php echo number_format($dados['valor'], 2, '.', ','); ?>
                    </div>
                    
                    <div class="detalhes-calculo">
                        <h4> Detalhes do Cálculo:</h4>
                        <div class="calculo-linha">
                            <span>Valor em Reais:</span>
                            <span>R$ <?php echo number_format($valor_real, 2, ',', '.'); ?></span>
                        </div>
                        <div class="calculo-linha">
                            <span>Cotação do <?php echo $dados['info']['simbolo']; ?>:</span>
                            <span>R$ <?php echo number_format($dados['cotacao'], 2, ',', '.'); ?></span>
                        </div>
                        <div class="calculo-linha">
                            <span>Cálculo:</span>
                            <span>R$ <?php echo number_format($valor_real, 2, ',', '.'); ?> ÷ <?php echo number_format($dados['cotacao'], 2, ',', '.'); ?></span>
                        </div>
                        <div class="calculo-linha" style="border-top: 1px solid #ccc; padding-top: 5px; margin-top: 10px; font-weight: bold;">
                            <span>Resultado:</span>
                            <span><?php echo $dados['info']['simbolo']; ?> <?php echo number_format($dados['valor'], 2, '.', ','); ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <div class="resultado-conversao" style="border-left-color: #dc3545; text-align: center;">
                <p style="color: #dc3545; font-size: 18px; margin: 0;">
                     Nenhuma moeda foi selecionada para conversão
                </p>
            </div>
        <?php endif; ?>
        
        <!-- botao para voltar e fazer nova conversao -->
        <a href="index.html" class="botao-voltar"> Fazer Nova Conversão</a>
    </div>
</body>
</html>