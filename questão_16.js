// Função para gerar um número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Vetor para armazenar os números aleatórios
let vetor = [];

// Preenche o vetor com números aleatórios entre 0 e 99
for (let i = 0; i < 20; i++) {
    vetor.push(gerarNumeroAleatorio(0, 99));
}

// Exibe os números gerados
console.log('Números gerados aleatoriamente:');
console.log(vetor.join(', '));

// Função para ordenar o vetor em ordem crescente (usando o método de bubble sort)
function ordenarVetorCrescente(vetor) {
    let trocado;
    do {
        trocado = false;
        for (let i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                // Troca os elementos de posição
                let temp = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = temp;
                trocado = true;
            }
        }
    } while (trocado);
}

// Ordena o vetor em ordem crescente
ordenarVetorCrescente(vetor);

// Exibe os números ordenados
console.log('\nNúmeros ordenados em ordem crescente:');
console.log(vetor.join(', '));
