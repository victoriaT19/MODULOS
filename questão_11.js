const prompt = require('prompt-sync')();

// Função para calcular os termos da PA e a soma dos termos
function calcularPA(primeiroTermo, razao, numeroTermos) {
    let termos = [];
    let soma = 0;

    for (let n = 1; n <= numeroTermos; n++) {
        let termo = primeiroTermo + (n - 1) * razao;
        termos.push(termo);
        soma += termo;
    }

    return { termos, soma };
}

// Programa principal
console.log('Calculadora de Progressão Aritmética (PA)');
const primeiroTermo = parseFloat(prompt('Digite o primeiro termo da PA: '));
const razao = parseFloat(prompt('Digite a razão da PA: '));

const numeroTermos = 10; // Vamos mostrar os 10 primeiros termos

// Calcula os termos da PA e a soma
const resultado = calcularPA(primeiroTermo, razao, numeroTermos);

// Exibe os termos da PA
console.log(`\nOs ${numeroTermos} primeiros termos da PA são:`);
console.log(resultado.termos.join(', '));

// Exibe a soma dos termos da PA
console.log(`\nA soma dos ${numeroTermos} primeiros termos da PA é: ${resultado.soma}`);
