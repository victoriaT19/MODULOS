const prompt = require('prompt-sync')();

function main() {
    const tamanho = 3;
    let matriz = [];

    //Leitura da matriz 3x3
    console.log("Digite os valores da matriz 3x3:");
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    //Cálculo da média dos elementos da diagonal secundária
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < tamanho; i++) {
        somaDiagonalSecundaria += matriz[i][tamanho - 1 - i];
    }
    let mediaDiagonalSecundaria = somaDiagonalSecundaria / tamanho;

    //Multiplicação dos elementos da diagonal principal pela média da diagonal secundária
    for (let i = 0; i < tamanho; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }

    //Impressão da matriz original e modificada
    console.log("\nMatriz 3x3 Original:");
    imprimirMatriz(matriz);

    console.log("\nMatriz 3x3 Modificada (diagonal principal multiplicada pela média da diagonal secundária):");
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
