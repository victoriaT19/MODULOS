const prompt = require('prompt-sync')();

// Vetor para armazenar os nomes
let nomes = [];

// Loop para ler os 7 nomes
for (let i = 0; i < 7; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    nomes.push(nome);
}

// Exibe os nomes na ordem inversa
console.log('\nNomes informados na ordem inversa:');
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}
