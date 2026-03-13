const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURAÇÃO PRINCIPAL - Servir arquivos estáticos
app.use(express.static('public'));

// ===== ROTAS DA API =====

// API - Mensagem simples
app.get('/api/mensagem', (req, res) => {
    res.json({
        mensagem: 'Hello World da API!',
        timestamp: new Date().toISOString()
    });
});

// API - Processar formulário de contato
app.post('/api/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Todos os campos são obrigatórios'
        });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            sucesso: false,
            erro: 'E-mail inválido'
        });
    }

    // Log de mensagem recebida
    console.log('Nova mensagem recebida:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Assunto:', assunto);
    console.log('Mensagem:', mensagem);
    console.log('----------------------------');

    // Responder com sucesso
    res.json({
        sucesso: true,
        mensagem: 'Mensagem recebida com sucesso!',
        dados: {
            nome,
            email,
            assunto,
            timestamp: new Date().toISOString()
        }
    });
});

// API - Listar posts do blog (exemplo)
app.get('/api/blog/posts', (req, res) => {
    const posts = [
        {
            id: 1,
            titulo: 'Como começar com Node.js em 2024',
            categoria: 'Node.js',
            data: '2024-01-15',
            resumo: 'Aprenda os fundamentos do Node.js...'
        },
        {
            id: 2,
            titulo: 'Express.js: Guia Completo',
            categoria: 'Express',
            data: '2024-01-10',
            resumo: 'Descubra como o Express simplifica...'
        }
    ];

    res.json({
        sucesso: true,
        total: posts.length,
        posts
    });
});

// Rota 404 personalizada
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Arquivos estáticos: public/');
    console.log('Páginas disponíveis:');
    console.log(`  - http://localhost:${PORT}/index.html`);
    console.log(`  - http://localhost:${PORT}/sobre.html`);
    console.log(`  - http://localhost:${PORT}/portfolio.html`);
    console.log(`  - http://localhost:${PORT}/blog.html`);
    console.log(`  - http://localhost:${PORT}/contato.html`);
    console.log('Endpoints da API:');
    console.log(`  - GET http://localhost:${PORT}/api/mensagem`);
    console.log(`  - POST http://localhost:${PORT}/api/contato`);
    console.log(`  - GET http://localhost:${PORT}/api/blog/posts`);
});