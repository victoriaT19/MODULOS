// Função para preencher um vetor com os primeiros 15 elementos da Sequência de Fibonacci
function preencherFibonacci() {
    let vetor = []; // Vetor para armazenar os elementos da sequência
    vetor[0] = 1; // Primeiro elemento da sequência de Fibonacci
    vetor[1] = 1; // Segundo elemento da sequência de Fibonacci

    // Preenche o vetor com os próximos elementos da sequência de Fibonacci
    for (let i = 2; i < 15; i++) {
        vetor[i] = vetor[i - 1] + vetor[i - 2];
    }

    return vetor;
}

console.log('Preenchendo um vetor com os primeiros 15 elementos da Sequência de Fibonacci:');
const vetorFibonacci = preencherFibonacci();
console.log(vetorFibonacci.join(', '));
