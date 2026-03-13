document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    const mensagemResposta = document.getElementById('mensagem-resposta');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Coletar dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value,
            timestamp: new Date().toISOString()
        };

        // Mostrar loading
        mensagemResposta.className = 'mensagem-resposta';
        mensagemResposta.style.display = 'block';
        mensagemResposta.style.background = '#FFC107';
        mensagemResposta.style.color = '#333';
        mensagemResposta.innerHTML = 'Enviando mensagem...';

        try {
            // Enviar para API
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const resultado = await response.json();

            if (response.ok) {
                // Sucesso
                mensagemResposta.className = 'mensagem-resposta sucesso';
                mensagemResposta.innerHTML = `
                    <strong>Mensagem enviada com sucesso!</strong>
                    <p>Obrigado, ${formData.nome}! Retornaremos em breve.</p>
                `;

                // Limpar formulário
                form.reset();

                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    mensagemResposta.style.display = 'none';
                }, 5000);

            } else {
                throw new Error(resultado.erro || 'Erro ao enviar mensagem');
            }

        } catch (error) {
            // Erro
            mensagemResposta.className = 'mensagem-resposta erro';
            mensagemResposta.innerHTML = `
                <strong>Erro ao enviar mensagem</strong>
                <p>${error.message}</p>
            `;
        }
    });

    // Validação em tempo real
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#f44336';
        } else {
            emailInput.style.borderColor = '#4CAF50';
        }
    });
});