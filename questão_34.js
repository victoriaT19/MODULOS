const prompt = require('prompt-sync')();

function main() {
    const tamanho = 50;
    let matriz = [];

    //Leitura da matriz 50x50
    console.log("Digite os valores da matriz 50x50:");
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    //Multiplicação de cada linha pela diagonal principal
    for (let i = 0; i < tamanho; i++) {
        let diagonalPrincipal = matriz[i][i]; // Elemento da diagonal principal da linha i
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] *= diagonalPrincipal;
        }
    }

    //Impressão da matriz modificada
    console.log("\nMatriz 50x50 após multiplicação de cada linha pelo elemento da diagonal principal:");
    imprimirMatriz(matriz);
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    const tamanho = matriz.length;
    for (let i = 0; i < tamanho; i++) {
        console.log(matriz[i].join('\t'));
    }
}

main();
