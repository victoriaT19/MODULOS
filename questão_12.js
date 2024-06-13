// Função para calcular os primeiros 10 termos da Sequência de Fibonacci
function fibonacci() {
    let termos = [1, 1]; // Iniciamos com os dois primeiros termos
    for (let i = 2; i < 10; i++) {
        termos[i] = termos[i - 1] + termos[i - 2];
    }
    return termos;
}

console.log('Sequência de Fibonacci - Os 10 primeiros elementos:');
const termosFibonacci = fibonacci();
console.log(termosFibonacci.join(', '));
