const prompt = require('prompt-sync')();

// Pergunta ao usuário o tamanho dos três segmentos de reta
const segmento1 = parseFloat(prompt('Digite o comprimento do primeiro segmento de reta: '));
const segmento2 = parseFloat(prompt('Digite o comprimento do segundo segmento de reta: '));
const segmento3 = parseFloat(prompt('Digite o comprimento do terceiro segmento de reta: '));

// Função para verificar se três segmentos podem formar um triângulo
function podeFormarTriangulo(a, b, c) {
    return (a < b + c) && (b < a + c) && (c < a + b);
}

// Verifica se os segmentos podem formar um triângulo
if (podeFormarTriangulo(segmento1, segmento2, segmento3)) {
    console.log('Os segmentos podem formar um triângulo.');
} else {
    console.log('Os segmentos não podem formar um triângulo.');
}
