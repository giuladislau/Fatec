# Calculadora Web

Atividade acadêmica de uma calculadora web funcional que realiza as 4 operações matemáticas básicas com interface responsiva.

## 📋 Descrição

Calculadora web desenvolvida com Node.js e Express, capaz de realizar adição, subtração, multiplicação e divisão. Conta com display intuitivo, histórico de cálculos e suporte a entrada via teclado.

## 📁 Estrutura do Projeto

```
calculadora-web/
│
├── node_modules/                # Dependências instaladas
├── public/                       # Arquivos estáticos
│   ├── index.html               # Interface da calculadora
│   ├── script.js                # Lógica e funcionalidades
│   └── style.css                # Estilos visuais
│
├── server.js                      # Servidor Express
├── package.json                   # Configuração do projeto
├── package-lock.json              # Lock de dependências
└── README.md                      # Este arquivo
```

## ✨ Funcionalidades

- **4 operações matemáticas**: Adição, subtração, multiplicação e divisão
- **Display dinâmico**: Exibe número atual e operação em processo
- **Botões especiais**: Limpar (C), apagar último dígito (⌫) e alternar sinal (±)
- **Ponto decimal**: Suporte a números decimais
- **Histórico**: Registra até 10 últimos cálculos com timestamp
- **Entrada via teclado**: Números, operadores e funções através do teclado
- **Tratamento de erros**: Aviso para divisão por zero
- **Arredondamento**: Resultados precisos com limitação de casas decimais

## 🎓 O que foi Aprendido

- Configurar servidor Express para servir arquivos estáticos
- Manipulação de DOM com JavaScript
- Lógica de processamento de operações matemáticas
- Gerenciamento de histórico com limite de items
- Validação e tratamento de erros (divisão por zero)
- Suporte a entrada via eventos de teclado
- Formatação e arredondamento de números
- Design visual com gradiente e responsividade

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado

### Passos

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

3. Acesse no navegador:
```
http://localhost:3000
```

## 📦 Dependências

- **express**: ^5.2.1 - Framework web para Node.js

## 🛠️ Ferramentas de Desenvolvimento

- **nodemon**: ^3.0.1 - Reinicia servidor automaticamente em desenvolvimento

---

**Tipo**: Atividade Acadêmica (FATEC)  
**Data**: 2024
