const prompt = require('prompt-sync')();

// Vetor para armazenar os números inteiros
let numeros = [];

// Loop para ler os 10 números inteiros
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

// Vetor para armazenar os números pares e suas posições
let pares = [];
let posicoes = [];

// Verifica quais são os números pares e suas posições
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
        posicoes.push(i);
    }
}

// Exibe os números pares e suas posições
console.log('\nNúmeros pares digitados e suas posições:');
for (let i = 0; i < pares.length; i++) {
    console.log(`Número par: ${pares[i]} - Posição: ${posicoes[i]}`);
}
