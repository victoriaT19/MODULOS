const prompt = require('prompt-sync')();

// Função para calcular o preço do aluguel
function calcularPreco(tipoCarro, diasAluguel, kmPercorridos) {
    let precoPorDia;
    let precoPorKm;

    if (tipoCarro === 'popular') {
        precoPorDia = 90;
        if (kmPercorridos <= 100) {
            precoPorKm = 0.20;
        } else {
            precoPorKm = 0.10;
        }
    } else if (tipoCarro === 'luxo') {
        precoPorDia = 150;
        if (kmPercorridos <= 200) {
            precoPorKm = 0.30;
        } else {
            precoPorKm = 0.25;
        }
    } else {
        throw new Error('Tipo de carro inválido');
    }

    const custoDias = diasAluguel * precoPorDia;
    const custoKm = kmPercorridos * precoPorKm;

    return custoDias + custoKm;
}

console.log('Bem-vindo ao serviço de aluguel de carros!');
const tipoCarro = prompt('Digite o tipo de carro (popular ou luxo): ').toLowerCase();
const diasAluguel = parseInt(prompt('Digite o número de dias de aluguel: '));
const kmPercorridos = parseFloat(prompt('Digite o número de Km percorridos: '));

try {
    const precoTotal = calcularPreco(tipoCarro, diasAluguel, kmPercorridos);
    console.log(`O preço total a ser pago é R$ ${precoTotal.toFixed(2)}.`);
} catch (error) {
    console.log(error.message);
}
