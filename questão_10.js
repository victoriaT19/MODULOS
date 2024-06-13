const prompt = require('prompt-sync')();

let continuar;
let somatorio = 0;
let menorValor = Infinity;
let quantidadeValores = 0;
let quantidadePares = 0;

do {
    const numero = parseFloat(prompt('Digite um número: '));

    // Adiciona ao somatório
    somatorio += numero;
    quantidadeValores++;

    // Verifica se é o menor valor
    if (numero < menorValor) {
        menorValor = numero;
    }

    // Verifica se é par
    if (numero % 2 === 0) {
        quantidadePares++;
    }

    // Pergunta se quer continuar
    continuar = prompt('Deseja continuar? (S/N): ').toUpperCase() === 'S';
} while (continuar);

// Calcula a média
const media = somatorio / quantidadeValores;

// Exibe os resultados
console.log(`\nResultados:`);
console.log(`- Somatório dos valores: ${somatorio}`);
console.log(`- Menor valor digitado: ${menorValor}`);
console.log(`- Média dos valores: ${media.toFixed(2)}`);
console.log(`- Quantidade de valores pares: ${quantidadePares}`);
