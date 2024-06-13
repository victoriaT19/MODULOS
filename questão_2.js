const prompt = require('prompt-sync')();

// Pergunta ao usuário a velocidade do carro
const velocidade = parseFloat(prompt('Qual é a velocidade do carro em km/h? '));

// Define o limite de velocidade
const limiteVelocidade = 80;

// Verifica se a velocidade ultrapassa o limite
if (velocidade > limiteVelocidade) {
    // Calcula a quantidade de Km acima do limite
    const excessoVelocidade = velocidade - limiteVelocidade;
    
    // Calcula o valor da multa
    const valorMulta = excessoVelocidade * 5;
    
    // Exibe a mensagem de multa e o valor
    console.log(`Você foi multado! O valor da multa é R$ ${valorMulta.toFixed(2)}.`);
} else {
    // Exibe a mensagem de que não houve multa
    console.log('Você está dentro do limite de velocidade. Não houve multa.');
}
