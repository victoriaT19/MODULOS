// Função para criar e imprimir a matriz identidade de 7x7
function criarMatrizIdentidade() {
    const tamanho = 7;
    let matriz = [];

    // Inicializa a matriz com zeros
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = 0;
        }
    }

    // Configura os elementos da diagonal principal para 1
    for (let i = 0; i < tamanho; i++) {
        matriz[i][i] = 1;
    }

    // Imprime a matriz
    console.log('Matriz Identidade 7x7:');
    for (let i = 0; i < tamanho; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Chama a função para criar e imprimir a matriz identidade
criarMatrizIdentidade();
