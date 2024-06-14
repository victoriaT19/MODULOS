const prompt = require('prompt-sync')();

function coletarDados() {
    let salarios = [];
    let filhos = [];
    let continuar = true;

    while (continuar) {
        const salario = parseFloat(prompt('Digite o salário da pessoa: '));
        const numeroFilhos = parseInt(prompt('Digite o número de filhos da pessoa: '), 10);

        salarios.push(salario);
        filhos.push(numeroFilhos);

        const resposta = prompt('Deseja continuar? (S/N): ').toUpperCase();
        if (resposta !== 'S') {
            continuar = false;
        }
    }

    return { salarios, filhos };
}

function calcularEstatisticas(dados) {
    const salarios = dados.salarios;
    const filhos = dados.filhos;
    const numPessoas = salarios.length;

    const somaSalarios = salarios.reduce((acc, salario) => acc + salario, 0);
    const somaFilhos = filhos.reduce((acc, num) => acc + num, 0);

    const mediaSalarios = somaSalarios / numPessoas;
    const mediaFilhos = somaFilhos / numPessoas;
    const maiorSalario = Math.max(...salarios);
    const percentualSalariosAte350 = (salarios.filter(salario => salario <= 350).length / numPessoas) * 100;

    return {
        mediaSalarios: mediaSalarios.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualSalariosAte350: percentualSalariosAte350.toFixed(2)
    };
}

// Coleta de dados
const dados = coletarDados();

// Cálculo das estatísticas
const estatisticas = calcularEstatisticas(dados);

// Exibição dos resultados
console.log(`Média de salário da população: R$ ${estatisticas.mediaSalarios}`);
console.log(`Média do número de filhos: ${estatisticas.mediaFilhos}`);
console.log(`Maior salário: R$ ${estatisticas.maiorSalario}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualSalariosAte350}%`);
