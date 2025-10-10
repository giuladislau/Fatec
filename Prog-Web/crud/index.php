<?php
$host = 'localhost';
$dbname = 'cadastro_clientes';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}

$mensagem = '';
$acao = isset($_GET['acao']) ? $_GET['acao'] : 'listar';
$id = isset($_GET['id']) ? $_GET['id'] : null;


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['acao_criar'])) {
        $sql = "INSERT INTO clientes (nome_completo, data_nascimento, cpf, rg, estado_civil, rua, numero, bairro, cidade, estado, cep, telefone, email, profissao) 
                VALUES (:nome_completo, :data_nascimento, :cpf, :rg, :estado_civil, :rua, :numero, :bairro, :cidade, :estado, :cep, :telefone, :email, :profissao)";
        
        $stmt = $pdo->prepare($sql);
        
        try {
            $stmt->execute([
                ':nome_completo' => $_POST['nome_completo'],
                ':data_nascimento' => $_POST['data_nascimento'],
                ':cpf' => $_POST['cpf'],
                ':rg' => $_POST['rg'],
                ':estado_civil' => $_POST['estado_civil'],
                ':rua' => $_POST['rua'],
                ':numero' => $_POST['numero'],
                ':bairro' => $_POST['bairro'],
                ':cidade' => $_POST['cidade'],
                ':estado' => $_POST['estado'],
                ':cep' => $_POST['cep'],
                ':telefone' => $_POST['telefone'],
                ':email' => $_POST['email'],
                ':profissao' => $_POST['profissao']
            ]);
            $mensagem = "Cliente cadastrado com sucesso!";
            $acao = 'listar';
        } catch(PDOException $e) {
            $mensagem = "Erro ao cadastrar: " . $e->getMessage();
        }
    }
    
    if (isset($_POST['acao_editar'])) {
        $sql = "UPDATE clientes SET 
                nome_completo = :nome_completo,
                data_nascimento = :data_nascimento,
                cpf = :cpf,
                rg = :rg,
                estado_civil = :estado_civil,
                rua = :rua,
                numero = :numero,
                bairro = :bairro,
                cidade = :cidade,
                estado = :estado,
                cep = :cep,
                telefone = :telefone,
                email = :email,
                profissao = :profissao
                WHERE id = :id";
        
        $stmt = $pdo->prepare($sql);
        
        try {
            $stmt->execute([
                ':nome_completo' => $_POST['nome_completo'],
                ':data_nascimento' => $_POST['data_nascimento'],
                ':cpf' => $_POST['cpf'],
                ':rg' => $_POST['rg'],
                ':estado_civil' => $_POST['estado_civil'],
                ':rua' => $_POST['rua'],
                ':numero' => $_POST['numero'],
                ':bairro' => $_POST['bairro'],
                ':cidade' => $_POST['cidade'],
                ':estado' => $_POST['estado'],
                ':cep' => $_POST['cep'],
                ':telefone' => $_POST['telefone'],
                ':email' => $_POST['email'],
                ':profissao' => $_POST['profissao'],
                ':id' => $_POST['id']
            ]);
            $mensagem = "Cliente atualizado com sucesso!";
            $acao = 'listar';
        } catch(PDOException $e) {
            $mensagem = "Erro ao atualizar: " . $e->getMessage();
        }
    }
}

// Excluir cliente
if ($acao == 'excluir' && $id) {
    $sql = "DELETE FROM clientes WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    try {
        $stmt->execute([':id' => $id]);
        $mensagem = "Cliente excluído com sucesso!";
        $acao = 'listar';
    } catch(PDOException $e) {
        $mensagem = "Erro ao excluir: " . $e->getMessage();
    }
}

// Buscar dados para editar ou visualizar
$cliente = null;
if (($acao == 'editar' || $acao == 'visualizar') && $id) {
    $sql = "SELECT * FROM clientes WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $id]);
    $cliente = $stmt->fetch(PDO::FETCH_ASSOC);
}

// Listar clientes
$clientes = [];
if ($acao == 'listar') {
    $sql = "SELECT * FROM clientes ORDER BY nome_completo";
    $stmt = $pdo->query($sql);
    $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Clientes</title>
</head>
<body>
    <h1>Sistema de Cadastro de Clientes</h1>
    
    <?php if ($mensagem): ?>
        <p style="color: green; font-weight: bold;"><?php echo $mensagem; ?></p>
    <?php endif; ?>
    
    <?php if ($acao == 'listar'): ?>
        <h2>Cadastrar Novo Cliente</h2>
        <form method="POST">
            <input type="hidden" name="acao_criar" value="1">
            
            <label>Nome completo:</label><br>
            <input type="text" name="nome_completo" required><br><br>
            
            <label>Data de nascimento:</label><br>
            <input type="date" name="data_nascimento" required><br><br>
            
            <label>CPF:</label><br>
            <input type="text" name="cpf" required><br><br>
            
            <label>RG:</label><br>
            <input type="text" name="rg" required><br><br>
            
            <label>Estado civil:</label><br>
            <select name="estado_civil" required>
                <option value="">Selecione</option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viúvo(a)">Viúvo(a)</option>
            </select><br><br>
            
            <label>Rua:</label><br>
            <input type="text" name="rua" required><br><br>
            
            <label>Número:</label><br>
            <input type="text" name="numero" required><br><br>
            
            <label>Bairro:</label><br>
            <input type="text" name="bairro" required><br><br>
            
            <label>Cidade:</label><br>
            <input type="text" name="cidade" required><br><br>
            
            <label>Estado (UF):</label><br>
            <input type="text" name="estado" maxlength="2" required><br><br>
            
            <label>CEP:</label><br>
            <input type="text" name="cep" required><br><br>
            
            <label>Telefone:</label><br>
            <input type="text" name="telefone"><br><br>
            
            <label>E-mail:</label><br>
            <input type="email" name="email" required><br><br>
            
            <label>Profissão:</label><br>
            <input type="text" name="profissao" required><br><br>
            
            <button type="submit">Cadastrar</button>
        </form>
        
        <hr>
        
        <h2>Clientes Cadastrados</h2>
        
        <?php if (count($clientes) > 0): ?>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
                <?php foreach ($clientes as $c): ?>
                <tr>
                    <td><?php echo $c['id']; ?></td>
                    <td><?php echo $c['nome_completo']; ?></td>
                    <td><?php echo $c['cpf']; ?></td>
                    <td><?php echo $c['telefone']; ?></td>
                    <td><?php echo $c['email']; ?></td>
                    <td>
                        <a href="?acao=visualizar&id=<?php echo $c['id']; ?>">Ver</a> |
                        <a href="?acao=editar&id=<?php echo $c['id']; ?>">Editar</a> |
                        <a href="?acao=excluir&id=<?php echo $c['id']; ?>" onclick="return confirm('Tem certeza que deseja excluir?')">Excluir</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
        <?php else: ?>
            <p>Nenhum cliente cadastrado.</p>
        <?php endif; ?>
        
    <?php elseif ($acao == 'visualizar' && $cliente): ?>
        <h2>Detalhes do Cliente</h2>
        <a href="?acao=listar">Voltar</a> | <a href="?acao=editar&id=<?php echo $cliente['id']; ?>">Editar</a>
        <hr>
        <p><strong>Nome completo:</strong> <?php echo $cliente['nome_completo']; ?></p>
        <p><strong>Data de nascimento:</strong> <?php echo date('d/m/Y', strtotime($cliente['data_nascimento'])); ?></p>
        <p><strong>CPF:</strong> <?php echo $cliente['cpf']; ?></p>
        <p><strong>RG:</strong> <?php echo $cliente['rg']; ?></p>
        <p><strong>Estado civil:</strong> <?php echo $cliente['estado_civil']; ?></p>
        <p><strong>Endereço:</strong> <?php echo $cliente['rua']; ?>, <?php echo $cliente['numero']; ?></p>
        <p><strong>Bairro:</strong> <?php echo $cliente['bairro']; ?></p>
        <p><strong>Cidade:</strong> <?php echo $cliente['cidade']; ?></p>
        <p><strong>Estado:</strong> <?php echo $cliente['estado']; ?></p>
        <p><strong>CEP:</strong> <?php echo $cliente['cep']; ?></p>
        <p><strong>Telefone:</strong> <?php echo $cliente['telefone']; ?></p>
        <p><strong>E-mail:</strong> <?php echo $cliente['email']; ?></p>
        <p><strong>Profissão:</strong> <?php echo $cliente['profissao']; ?></p>
        
    <?php elseif ($acao == 'editar' && $cliente): ?>
        <h2>Editar Cliente</h2>
        <a href="?acao=listar">Voltar</a>
        <hr>
        <form method="POST">
            <input type="hidden" name="acao_editar" value="1">
            <input type="hidden" name="id" value="<?php echo $cliente['id']; ?>">
            
            <label>Nome completo:</label><br>
            <input type="text" name="nome_completo" value="<?php echo $cliente['nome_completo']; ?>" required><br><br>
            
            <label>Data de nascimento:</label><br>
            <input type="date" name="data_nascimento" value="<?php echo $cliente['data_nascimento']; ?>" required><br><br>
            
            <label>CPF:</label><br>
            <input type="text" name="cpf" value="<?php echo $cliente['cpf']; ?>" required><br><br>
            
            <label>RG:</label><br>
            <input type="text" name="rg" value="<?php echo $cliente['rg']; ?>" required><br><br>
            
            <label>Estado civil:</label><br>
            <select name="estado_civil" required>
                <option value="Solteiro(a)" <?php echo $cliente['estado_civil'] == 'Solteiro(a)' ? 'selected' : ''; ?>>Solteiro(a)</option>
                <option value="Casado(a)" <?php echo $cliente['estado_civil'] == 'Casado(a)' ? 'selected' : ''; ?>>Casado(a)</option>
                <option value="Divorciado(a)" <?php echo $cliente['estado_civil'] == 'Divorciado(a)' ? 'selected' : ''; ?>>Divorciado(a)</option>
                <option value="Viúvo(a)" <?php echo $cliente['estado_civil'] == 'Viúvo(a)' ? 'selected' : ''; ?>>Viúvo(a)</option>
            </select><br><br>
            
            <label>Rua:</label><br>
            <input type="text" name="rua" value="<?php echo $cliente['rua']; ?>" required><br><br>
            
            <label>Número:</label><br>
            <input type="text" name="numero" value="<?php echo $cliente['numero']; ?>" required><br><br>
            
            <label>Bairro:</label><br>
            <input type="text" name="bairro" value="<?php echo $cliente['bairro']; ?>" required><br><br>
            
            <label>Cidade:</label><br>
            <input type="text" name="cidade" value="<?php echo $cliente['cidade']; ?>" required><br><br>
            
            <label>Estado (UF):</label><br>
            <input type="text" name="estado" value="<?php echo $cliente['estado']; ?>" maxlength="2" required><br><br>
            
            <label>CEP:</label><br>
            <input type="text" name="cep" value="<?php echo $cliente['cep']; ?>" required><br><br>
            
            <label>Telefone:</label><br>
            <input type="text" name="telefone" value="<?php echo $cliente['telefone']; ?>"><br><br>
            
            <label>E-mail:</label><br>
            <input type="email" name="email" value="<?php echo $cliente['email']; ?>" required><br><br>
            
            <label>Profissão:</label><br>
            <input type="text" name="profissao" value="<?php echo $cliente['profissao']; ?>" required><br><br>
            
            <button type="submit">Atualizar</button>
        </form>
    <?php endif; ?>
</body>
</html>