<!-- Giullia Souza Ladislau -->

<!DOCTYPE html>
<html>
<head>
    <title>Inscrição Academia</title>
</head>
<body>
    <h2>Cadastro de inscrição - Academia</h2>
    
    <?php
    if ($_POST) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $curso = $_POST['curso'];
        
        if ($curso == "Musculação") {
            echo "Inscrição no curso de Musculação foi realizada com sucesso. Seu curso iniciará dia 20/04/2025 às 09h00 na academia";
        } elseif ($curso == "Natação") {
            echo "Inscrição no curso de Natação foi realizada com sucesso. Seu curso iniciará dia 20/04/2025 às 09h00 na piscina";
        } elseif ($curso == "Artes Marciais") {
            echo "Inscrição no curso de Artes Marciais foi realizada com sucesso. Seu curso será dia 20/04/2025 às 09h00 no ginásio";
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
            <option value="Musculação">Musculação</option>
            <option value="Natação">Natação</option>
            <option value="Artes Marciais">Artes Marciais</option>
        </select><br><br>
        <input type="submit" value="Inscrever-se">
    </form>
    
    <?php }?> 
</body>
</html>