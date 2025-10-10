# Sistema de Cadastro de Clientes em PHP

**Autor:** Giullia Ladislau

## Como Executar o Projeto

**Passo a passo:**

1.  **Clonar o Repositório:**
    Clone este repositório para a pasta raiz do seu servidor web.
    ```bash
    git clone [https://github.com/giuladislau/Fatec.git](https://github.com/giuladislau/Fatec.git)
    ```

2.  **Configurar o Banco de Dados:**
    * Abra o phpMyAdmin.
    * Crie um novo banco de dados. Você pode nomeá-lo como `cadastro_clientes`.
    * Selecione o banco de dados recém-criado e clique na aba **Importar**.
    * Faça o upload do arquivo `cadastro_clientes.sql`, que está na raiz deste projeto, para criar a tabela e a estrutura necessárias.

3.  **Verificar a Conexão:**
    * Abra o arquivo principal da aplicação (ex: `index.php`).
    * Verifique se as variáveis de conexão com o banco de dados correspondem à sua configuração local (geralmente `$host = 'localhost'`, `$username = 'root'`, `$password = ''`).

4.  **Executar a Aplicação:**
    * Inicie os serviços Apache e MySQL do seu servidor local.
    * Abra seu navegador e acesse o endereço correspondente à pasta do projeto. Exemplo: `http://localhost/Fatec/`