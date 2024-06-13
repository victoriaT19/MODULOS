const prompt = require('prompt-sync')();

// Vetores para armazenar os nomes e idades das pessoas
let nomes = [];
let idades = [];

// Loop para ler os dados das 9 pessoas
for (let i = 0; i < 9; i++) {
    const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    const idade = parseInt(prompt(`Digite a idade de ${nome}: `));

    nomes.push(nome);
    idades.push(idade);
}

// Vetor para armazenar os nomes das pessoas menores de idade
let menoresDeIdade = [];

// Filtra as pessoas menores de idade
for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        menoresDeIdade.push(nomes[i]);
    }
}

// Exibe os nomes das pessoas menores de idade
console.log('\nPessoas menores de idade:');
for (let nome of menoresDeIdade) {
    console.log(nome);
}
