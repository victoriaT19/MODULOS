const prompt = require('prompt-sync')();

// Objeto para armazenar o registro do funcionário
let funcionario = {
    nome: '',
    cargo: '',
    salario: 0
};

// Solicita ao usuário que digite o nome, cargo e salário do funcionário
funcionario.nome = prompt('Digite o nome do funcionário: ');
funcionario.cargo = prompt('Digite o cargo do funcionário: ');
funcionario.salario = parseFloat(prompt('Digite o salário do funcionário: '));

// Exibe o registro completo do funcionário
console.log('\nRegistro completo do funcionário:');
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
