const prompt = require('prompt-sync')();

// Função para calcular os pontos ganhos
function calcularPontos(horasAtividade) {
    let pontos;

    if (horasAtividade <= 10) {
        pontos = horasAtividade * 2;
    } else if (horasAtividade <= 20) {
        pontos = (10 * 2) + ((horasAtividade - 10) * 5);
    } else {
        pontos = (10 * 2) + (10 * 5) + ((horasAtividade - 20) * 10);
    }

    return pontos;
}

// Função para calcular o dinheiro ganho
function calcularDinheiro(pontos) {
    return pontos * 0.05;
}

// Programa principal
console.log('Programa de Vida Saudável');
const horasAtividade = parseFloat(prompt('Digite quantas horas de atividade física você fez no mês: '));

// Calcula os pontos e o dinheiro ganhos
const pontosGanhos = calcularPontos(horasAtividade);
const dinheiroGanho = calcularDinheiro(pontosGanhos);

console.log(`Você ganhou ${pontosGanhos} pontos.`);
console.log(`Você faturou R$ ${dinheiroGanho.toFixed(2)}.`);
