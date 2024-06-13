const prompt = require('prompt-sync')();

// Função para obter a escolha do computador
function escolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
}

// Função para determinar o vencedor
function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return 'Empate';
    }
    if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'Você venceu!';
    }
    return 'Você perdeu!';
}

// Jogo principal
console.log('Bem-vindo ao jogo de JoKenPo!');
console.log('Escolha: pedra, papel ou tesoura.');

const escolhaJogador = prompt('Sua escolha: ').toLowerCase();
const escolhaComputador = escolhaComputador();

console.log(`Você escolheu: ${escolhaJogador}`);
console.log(`O computador escolheu: ${escolhaComputador}`);

const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
console.log(resultado);
