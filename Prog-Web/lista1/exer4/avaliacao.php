<?php
// arquivo: avaliacao.php
// este arquivo recebe as notas e frequencia e calcula a situacao final do aluno

// verifica se os dados foram enviados via post
if ($_POST) {
    
    // pega os valores enviados pelo formulario
    $p1 = $_POST['p1'];
    $ai1 = $_POST['ai1'];
    $p2 = $_POST['p2'];
    $ai2 = $_POST['ai2'];
    $frequencia = $_POST['frequencia'];
    
    // converte os valores para float (numero com casas decimais)
    $p1 = floatval($p1);
    $ai1 = floatval($ai1);
    $p2 = floatval($p2);
    $ai2 = floatval($ai2);
    $frequencia = floatval($frequencia);
    
    // calcula a media usando a formula: ((P1+AI1) + (P2+AI2))/2
    $media = (($p1 + $ai1) + ($p2 + $ai2)) / 2;
    
    // determina a situacao final do aluno baseado nos criterios
    if ($media >= 6 && $frequencia >= 75) {
        $situacao = "Aprovado";
        $cor_situacao = "#28a745"; // verde para aprovado
    } elseif ($media >= 6 && $frequencia < 75) {
        $situacao = "Reprovado por frequência";
        $cor_situacao = "#ffc107"; // amarelo para reprovado por frequencia
    } elseif ($media < 6 && $frequencia >= 75) {
        $situacao = "Reprovado por nota";
        $cor_situacao = "#fd7e14"; // laranja para reprovado por nota
    } else {
        $situacao = "Reprovado por nota e frequência";
        $cor_situacao = "#dc3545"; // vermelho para reprovado por ambos
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
    <title>Resultado - Situação Final do Aluno</title>
    <style>
        /* mesmo estilo da pagina anterior para manter consistencia */
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
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
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 20px;
            border: 3px solid;
        }
        
        .media-valor {
            font-size: 28px;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .situacao-final {
            font-size: 24px;
            font-weight: bold;
            margin-top: 15px;
        }
        
        .detalhes-notas {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .detalhes-notas h3 {
            margin-top: 0;
            color: #333;
        }
        
        .linha-nota {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        
        .linha-nota:last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 16px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #dee2e6;
        }
        
        .calculo-detalhado {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .calculo-detalhado h3 {
            margin-top: 0;
            color: #333;
        }
        
        .formula {
            font-family: monospace;
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 3px;
            margin: 10px 0;
            border-left: 3px solid #6c757d;
        }
        
        .criterios {
            background-color: #e7f3ff;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-left: 4px solid #2196F3;
        }
        
        .criterios h3 {
            margin-top: 0;
            color: #333;
        }
        
        .criterios ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        
        .criterios li {
            margin: 5px 0;
            color: #666;
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
        <h1>Situação Final do Aluno</h1>
        
        <!-- mostra o resultado principal -->
        <div class="resultado-principal" style="border-color: <?php echo $cor_situacao; ?>; color: <?php echo $cor_situacao; ?>;">
            <div class="media-valor">Média Final: <?php echo number_format($media, 1, ',', '.'); ?></div>
            <div>Frequência: <?php echo number_format($frequencia, 0); ?>%</div>
            <div class="situacao-final"><?php echo $situacao; ?></div>
        </div>
        
        <!-- mostra os detalhes das notas -->
        <div class="detalhes-notas">
            <h3>Detalhes das Notas:</h3>
            <div class="linha-nota">
                <span>Primeira Prova (P1):</span>
                <span><?php echo number_format($p1, 1, ',', '.'); ?></span>
            </div>
            <div class="linha-nota">
                <span>Avaliação Interdisciplinar I (AI I):</span>
                <span><?php echo number_format($ai1, 1, ',', '.'); ?></span>
            </div>
            <div class="linha-nota">
                <span>Segunda Prova (P2):</span>
                <span><?php echo number_format($p2, 1, ',', '.'); ?></span>
            </div>
            <div class="linha-nota">
                <span>Avaliação Interdisciplinar II (AI II):</span>
                <span><?php echo number_format($ai2, 1, ',', '.'); ?></span>
            </div>
            <div class="linha-nota">
                <span>Frequência:</span>
                <span><?php echo number_format($frequencia, 0); ?>%</span>
            </div>
            <div class="linha-nota">
                <span>Média Final:</span>
                <span><?php echo number_format($media, 1, ',', '.'); ?></span>
            </div>
        </div>
        
        <!-- mostra o calculo detalhado -->
        <div class="calculo-detalhado">
            <h3>Cálculo Detalhado:</h3>
            <div class="formula">
                Média = ((P1+AI1) + (P2+AI2))/2
            </div>
            <div class="formula">
                Média = ((<?php echo number_format($p1, 1, ',', '.'); ?>+<?php echo number_format($ai1, 1, ',', '.'); ?>) + (<?php echo number_format($p2, 1, ',', '.'); ?>+<?php echo number_format($ai2, 1, ',', '.'); ?>))/2
            </div>
            <div class="formula">
                Média = (<?php echo number_format($p1 + $ai1, 1, ',', '.'); ?> + <?php echo number_format($p2 + $ai2, 1, ',', '.'); ?>)/2
            </div>
            <div class="formula">
                Média = <?php echo number_format(($p1 + $ai1) + ($p2 + $ai2), 1, ',', '.'); ?>/2 = <?php echo number_format($media, 1, ',', '.'); ?>
            </div>
        </div>
        
        <!-- mostra os criterios de avaliacao -->
        <div class="criterios">
            <h3>Critérios de Avaliação:</h3>
            <ul>
                <li>Aprovado: média >= 6 e frequência >= 75%</li>
                <li>Reprovado por frequência: média >= 6 e frequência < 75%</li>
                <li>Reprovado por nota: média < 6 e frequência >= 75%</li>
                <li>Reprovado por nota e frequência: média < 6 e frequência < 75%</li>
            </ul>
        </div>
        
        <!-- botao para voltar e fazer nova avaliacao -->
        <a href="index.html" class="botao-voltar">Avaliar Outro Aluno</a>
    </div>
</body>
</html>