const prompt = require('prompt-sync')();

let salarioHomens = 0;
let salarioMulheres = 0;
let continuar = true;

while (continuar) {
    const salario = parseFloat(prompt('Digite o salário do funcionário: '));
    const sexo = prompt('Digite o sexo do funcionário (M para masculino, F para feminino): ').toUpperCase();

    // Verifica o sexo e adiciona ao total correspondente
    if (sexo === 'M') {
        salarioHomens += salario;
    } else if (sexo === 'F') {
        salarioMulheres += salario;
    } else {
        console.log('Sexo inválido. Por favor, digite M para masculino ou F para feminino.');
        continue; // Reinicia o loop para pedir novamente os dados
    }

    // Pergunta se o usuário quer continuar
    const resposta = prompt('Deseja continuar? (S/N): ').toUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }
}

// Exibe o total de salários pagos aos homens e às mulheres
console.log(`Total de salários pagos aos homens: R$ ${salarioHomens.toFixed(2)}`);
console.log(`Total de salários pagos às mulheres: R$ ${salarioMulheres.toFixed(2)}`);
