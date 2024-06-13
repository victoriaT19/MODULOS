const prompt = require('prompt-sync')();

// Função para sortear um número entre 1 e 5
function sortearNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

// Jogo principal
console.log('Bem-vindo ao jogo de adivinhação!');
console.log('Tente adivinhar o número que o computador sorteou (entre 1 e 5).');

const numeroSorteado = sortearNumero();
const tentativa = parseInt(prompt('Digite o seu palpite: '));

// Verifica se o jogador acertou
if (tentativa === numeroSorteado) {
    console.log(`Parabéns! Você acertou. O número sorteado foi ${numeroSorteado}.`);
} else {
    console.log(`Que pena! Você errou. O número sorteado foi ${numeroSorteado}.`);
}
