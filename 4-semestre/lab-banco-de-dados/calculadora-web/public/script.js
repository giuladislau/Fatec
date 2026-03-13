let displayValue = '0';
let primeiroNumero = null;
let segundoNumero = null;
let operadorAtual = null;
let aguardandoSegundoNumero = false;
let historico = [];

const display = document.getElementById('display');
const operacaoAtual = document.getElementById('operacao-atual');
const historicoLista = document.getElementById('historico-lista');

function atualizarDisplay() {
	display.textContent = displayValue;
}

function atualizarOperacaoAtual() {
	if (primeiroNumero !== null && operadorAtual) {
		const simbolos = {
			'+': '+',
			'-': '−',
			'*': '×',
			'/': '÷'
		};
		operacaoAtual.textContent = `${primeiroNumero} ${simbolos[operadorAtual] || operadorAtual}`;
	} else {
		operacaoAtual.textContent = '';
	}
}

function adicionarNumero(numero) {
	if (aguardandoSegundoNumero) {
		displayValue = numero;
		aguardandoSegundoNumero = false;
	} else {
		if (displayValue === '0' && numero !== '.') {
			displayValue = numero;
		} else {
			if (numero === '.' && displayValue.includes('.')) return;
			displayValue += numero;
		}
	}
	atualizarDisplay();
}

function definirOperacao(operador) {
	if (operadorAtual !== null && !aguardandoSegundoNumero) {
		calcular();
	}
	primeiroNumero = parseFloat(displayValue);
	operadorAtual = operador;
	aguardandoSegundoNumero = true;
	atualizarOperacaoAtual();
}

function calcular() {
	if (operadorAtual === null || aguardandoSegundoNumero) return;

	segundoNumero = parseFloat(displayValue);
	let resultado;

	switch (operadorAtual) {
		case '+':
			resultado = primeiroNumero + segundoNumero;
			break;
		case '-':
			resultado = primeiroNumero - segundoNumero;
			break;
		case '*':
			resultado = primeiroNumero * segundoNumero;
			break;
		case '/':
			if (segundoNumero === 0) {
				alert('Erro: Divisão por zero!');
				limpar();
				return;
			}
			resultado = primeiroNumero / segundoNumero;
			break;
		default:
			return;
	}

	resultado = Math.round(resultado * 100000000) / 100000000;
	adicionarAoHistorico(primeiroNumero, operadorAtual, segundoNumero, resultado);
	displayValue = resultado.toString();
	atualizarDisplay();
	operacaoAtual.textContent = '';
	primeiroNumero = resultado;
	operadorAtual = null;
	aguardandoSegundoNumero = true;
}

function limpar() {
	displayValue = '0';
	primeiroNumero = null;
	segundoNumero = null;
	operadorAtual = null;
	aguardandoSegundoNumero = false;
	atualizarDisplay();
	atualizarOperacaoAtual();
}

function apagarUltimo() {
	displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : '0';
	atualizarDisplay();
}

function alternarSinal() {
	if (displayValue !== '0') {
		displayValue = displayValue.startsWith('-')
			? displayValue.slice(1)
			: '-' + displayValue;
		atualizarDisplay();
	}
}

function adicionarAoHistorico(num1, op, num2, res) {
	const simbolos = {
		'+': '+',
		'-': '−',
		'*': '×',
		'/': '÷'
	};

	const calculo = {
		expressao: `${num1} ${simbolos[op]} ${num2}`,
		resultado: res,
		timestamp: new Date().toLocaleTimeString('pt-BR')
	};

	historico.unshift(calculo);
	if (historico.length > 10) historico.pop();
	atualizarHistorico();
}

function atualizarHistorico() {
	if (historico.length === 0) {
		historicoLista.innerHTML = '<p class="historico-vazio">Nenhum cálculo ainda</p>';
		return;
	}

	let html = '';
	historico.forEach(item => {
		html += `
			<div class="historico-item">
				<div>
					<div class="historico-calculo">${item.expressao}</div>
					<small style="color: #999; font-size: 0.8em;">${item.timestamp}</small>
				</div>
				<div class="historico-resultado">= ${item.resultado}</div>
			</div>
		`;
	});
	historicoLista.innerHTML = html;
}

function limparHistorico() {
	if (historico.length === 0) {
		alert('O histórico já está vazio!');
		return;
	}
	if (confirm('Limpar todo o histórico?')) {
		historico = [];
		atualizarHistorico();
	}
}

document.addEventListener('keydown', (e) => {
	if (e.key >= '0' && e.key <= '9') adicionarNumero(e.key);
	if (e.key === '.' || e.key === ',') adicionarNumero('.');
	if (e.key === '+') definirOperacao('+');
	if (e.key === '-') definirOperacao('-');
	if (e.key === '*') definirOperacao('*');
	if (e.key === '/') {
		e.preventDefault();
		definirOperacao('/');
	}
	if (e.key === 'Enter' || e.key === '=') {
		e.preventDefault();
		calcular();
	}
	if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') limpar();
	if (e.key === 'Backspace') {
		e.preventDefault();
		apagarUltimo();
	}
});

console.log('Calculadora Web carregada!');