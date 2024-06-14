const prompt = require('prompt-sync')();

// Vetor para armazenar os dados dos funcionários
let funcionarios = [];

// Função para calcular a dedução do INSS e o salário líquido
function calcularContracheque(salarioBruto) {
    const deducaoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducaoINSS;
    return {
        deducaoINSS: deducaoINSS.toFixed(2),
        salarioLiquido: salarioLiquido.toFixed(2)
    };
}

// Leitura dos dados dos funcionários (simulação para 3 funcionários)
for (let i = 0; i < 3; i++) {
    let funcionario = {};

    funcionario.matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
    funcionario.nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
    funcionario.salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}: `));

    funcionarios.push(funcionario);
}

// Processamento e exibição dos contracheques
console.log('\nContracheques dos funcionários:');
funcionarios.forEach(funcionario => {
    const contracheque = calcularContracheque(funcionario.salarioBruto);
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${contracheque.deducaoINSS}`);
    console.log(`Salário líquido: R$ ${contracheque.salarioLiquido}`);
    console.log('------------------------');
});
