const prompt = require('prompt-sync')();

// Pergunta ao usuário a quantidade de cigarros fumados por dia e quantos anos ele já fumou
const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
const anosFumando = parseInt(prompt('Quantos anos você já fumou? '));

// Calcula o total de cigarros fumados
const totalCigarrosFumados = cigarrosPorDia * anosFumando * 365;

// Calcula a perda total de minutos de vida
const minutosPerdidos = totalCigarrosFumados * 10;

// Converte minutos perdidos em dias perdidos
const diasPerdidos = minutosPerdidos / 1440; // 1440 minutos em um dia

// Exibe o resultado
console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao fumo.`);
