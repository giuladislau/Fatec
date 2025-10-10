<!-- Giullia Souza Ladislau -->

<!DOCTYPE html>
<html>
<head>
    <title>Inscrição Curso de Extensão</title>
</head>
<body>
    <h2>Cadastro de Inscrição - Curso de Extensão</h2>
    
    <?php
    if ($_POST) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $curso = $_POST['curso'];
        
        if ($curso == "Python") {
            echo "Inscrição no curso de Python foi realizada com sucesso. Seu curso será dia 20/04/2025 às 09h00 no laboratório 13";
        } elseif ($curso == "Arduino") {
            echo "Inscrição no curso de Arduino foi realizada com sucesso. Seu curso será dia 20/04/2025 às 09h00 no laboratório 16";
        } elseif ($curso == "Robótica") {
            echo "Inscrição no curso de Robótica foi realizada com sucesso. Seu curso será dia 20/04/2025 às 09h00 no laboratório 15";
        }
    } else {
    ?>
    
    <form method="POST">
        Nome: <input type="text" name="nome" required><br><br>
        E-mail: <input type="email" name="email" required><br><br>
        Telefone: <input type="text" name="telefone" required><br><br>
        Curso: 
        <select name="curso" required>
            <option value="">Selecione</option>
            <option value="Python">Python</option>
            <option value="Arduino">Arduino</option>
            <option value="Robótica">Robótica</option>
        </select><br><br>
        <input type="submit" value="Inscrever-se">
    </form>
    
    <?php } ?>
</body>
</html>