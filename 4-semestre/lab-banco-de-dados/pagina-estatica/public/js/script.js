// Esperar o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript carregado com sucesso!');
    // Elementos
    const btnClick = document.getElementById('btn-click');
    const btnApi = document.getElementById('btn-api');
    const resultado = document.getElementById('resultado');
    // Contador de cliques
    let contador = 0;
    // Evento do botão principal
    btnClick.addEventListener('click', () => {
        contador++;
        resultado.innerHTML = `
            <div>
                <strong>Botão clicado ${contador} vez(es)!</strong>
                <p>JavaScript está funcionando perfeitamente!</p>
            </div>
        `;
        resultado.style.background = '#4CAF50';
        resultado.style.color = 'white';
        // Animação
        resultado.style.transform = 'scale(1.05)';
        setTimeout(() => {
            resultado.style.transform = 'scale(1)';
        }, 200);
    });
    // Evento para chamar a API
    btnApi.addEventListener('click', async () => {
        resultado.innerHTML = '<p>Carregando...</p>';
        resultado.style.background = '#FFC107';
        resultado.style.color = '#333';
        try {
            // Fazer requisição para a API
            const response = await fetch('/api/mensagem');
            const data = await response.json();
            resultado.innerHTML = `
                <div>
                    <strong>Resposta da API:</strong>
                    <p>${data.mensagem}</p>
                    <small>Horário: ${new Date(data.timestamp).toLocaleString('pt-BR')}</small>
                </div>
            `;
            resultado.style.background = '#2196F3';
            resultado.style.color = 'white';
        } catch (error) {
            resultado.innerHTML = `
                <div>
                    <strong>Erro ao conectar com a API</strong>
                    <p>${error.message}</p>
                </div>
            `;
            resultado.style.background = '#f44336';
            resultado.style.color = 'white';
        }
    });
    // Mensagem de boas-vindas
    console.log('Olá! Obrigado por visitar meu site.');
    console.log('Este projeto foi construído com Node.js e Express');
});