# Página Estática com Express.js

Projeto acadêmico que implementa um servidor web com Express.js para servir uma aplicação frontend profissional. A aplicação inclui múltiplas páginas, navegação responsiva, requisições à API RESTful, formulário de contato com validação, tratamento de erros 404 personalizados e animações CSS modernas integradas com Bootstrap.

## ESTRUTURA DO PROJETO

```
pagina-estatica/
│
├── node_modules/          # Dependências instaladas
├── public/                # Arquivos estáticos servidos
│   ├── index.html        # Página principal (Home)
│   ├── sobre.html        # Página sobre o projeto
│   ├── portfolio.html    # Portfólio com projetos reais
│   ├── blog.html         # Blog com artigos
│   ├── contato.html      # Formulário de contato
│   ├── 404.html          # Página de erro personalizada
│   ├── css/
│   │   └── style.css     # Estilos globais e responsivos
│   ├── js/
│   │   ├── script.js     # Interatividade do frontend
│   │   └── contato.js    # Validação e envio de formulário
│   ├── images/           # Imagens do projeto
│   ├── fonts/            # Fontes customizadas
│   └── vendor/           # Bibliotecas externas
│
├── app.js                # Servidor Express e rotas API
├── package.json          # Configuração do projeto
├── package-lock.json     # Lock de dependências
└── README.md             # Este arquivo
```

## FUNCIONALIDADES IMPLEMENTADAS

### Frontend
- Navegação entre 5 páginas: Home, Sobre, Portfólio, Blog e Contato
- Framework Bootstrap 5.3.2 para responsividade
- Bootstrap Icons para ícones profissionais
- CSS personalizado com animações e gradientes modernos
- Formulário de contato com validação em tempo real
- Display de mensagens de sucesso e erro

### Backend
- Servidor Express configurado para servir arquivos estáticos
- 3 endpoints da API RESTful:
  - GET /api/mensagem - Retorna mensagem simples
  - POST /api/contato - Processa formulário de contato com validação
  - GET /api/blog/posts - Retorna lista de posts do blog
- Tratamento de erros 404 personalizado
- Middleware para processar JSON e formulários
- Validação de email no servidor

### Projetos no Portfólio
1. API RESTful para Gerenciamento de Tarefas (Node.js, Express, PostgreSQL, Docker)
2. API REST para Clínica Veterinária (Java, Spring Boot)

## O QUE FOI APRENDIDO

- Estrutura profissional e escalável para projetos web
- Configuração de Express.js com express.static() para servir arquivos estáticos
- Separação de responsabilidades entre frontend e backend
- Navegação entre múltiplas páginas HTML
- Requisições HTTP com fetch() para comunicação com API
- Método POST para envio seguro de dados de formulários
- Validação de dados no cliente e no servidor
- Tratamento de erros e respostas da API
- Integração de framework CSS (Bootstrap)
- Animações CSS com transições e transformações
- Responsividade com Media Queries
- Arquitetura preparada para crescimento e manutenção

## COMO EXECUTAR

### Pré-requisitos
- Node.js versão 14 ou superior instalado
- npm (gerenciador de pacotes do Node.js)

### Instalação e Execução

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor em ambiente de desenvolvimento:
```bash
npm start
```

3. Acesse a aplicação no navegador:
```
http://localhost:3000
```

### Desenvolvimento com Auto-reload
Para desenvolvimento com reinicialização automática do servidor:
```bash
npm run dev
```

## DEPENDÊNCIAS

- express: Framework web para Node.js
- nodemon (desenvolvimento): Reinicia automaticamente em alterações

## ENDPOINTS DA API

### GET /api/mensagem
Retorna uma mensagem simples com timestamp.

Resposta:
```json
{
  "mensagem": "Hello World da API!",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### POST /api/contato
Processa mensagem de contato com validação.

Corpo da Requisição:
```json
{
  "nome": "string",
  "email": "email@exemplo.com",
  "assunto": "string",
  "mensagem": "string"
}
```

Resposta de Sucesso:
```json
{
  "sucesso": true,
  "mensagem": "Mensagem recebida com sucesso!",
  "dados": {
    "nome": "string",
    "email": "email@exemplo.com",
    "assunto": "string",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET /api/blog/posts
Retorna lista de posts do blog disponíveis.

Resposta:
```json
{
  "sucesso": true,
  "total": 2,
  "posts": [
    {
      "id": 1,
      "titulo": "Como começar com Node.js em 2024",
      "categoria": "Node.js",
      "data": "2024-01-15",
      "resumo": "Aprenda os fundamentos do Node.js..."
    }
  ]
}
```

## NOTAS IMPORTANTES

- O formulário de contato valida dados tanto no cliente quanto no servidor
- Os dados de contato são logados no console do servidor
- Para implementação em produção, considere adicionar banco de dados ou serviço de email
- A aplicação utiliza CDN para Bootstrap, não necessitando instalação local
- Todos os arquivos estáticos são servidos da pasta public/