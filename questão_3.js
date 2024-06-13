const prompt = require('prompt-sync')();

// Pergunta ao usuário a distância que deseja percorrer
const distancia = parseFloat(prompt('Qual é a distância que você deseja percorrer em km? '));

// Define o preço por km para diferentes faixas de distância
const precoCurtaDistancia = 0.50;
const precoLongaDistancia = 0.45;

// Calcula o preço da passagem com base na distância
let precoPassagem;
if (distancia <= 200) {
    precoPassagem = distancia * precoCurtaDistancia;
} else {
    precoPassagem = distancia * precoLongaDistancia;
}

// Exibe o preço da passagem
console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}.`);
