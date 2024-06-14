const prompt = require('prompt-sync')();

function main() {
    const size = 5;
    let matriz = [];

    // Inicialização da matriz 5x5 e leitura dos valores
    console.log("Digite os valores da matriz 5x5:");
    for (let i = 0; i < size; i++) {
        matriz[i] = [];
        for (let j = 0; j < size; j++) {
            matriz[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    // Inicialização dos vetores SL e SC
    let SL = new Array(size).fill(0); // Vetor para armazenar as somas das linhas
    let SC = new Array(size).fill(0); // Vetor para armazenar as somas das colunas

    // Cálculo das somas das linhas e das colunas
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            SL[i] += matriz[i][j]; // Soma da linha i
            SC[j] += matriz[i][j]; // Soma da coluna j
        }
    }

    // Impressão da matriz M
    console.log("\nMatriz M[5][5]:");
    for (let i = 0; i < size; i++) {
        console.log(matriz[i].join('\t'));
    }

    // Impressão do vetor SL (somas das linhas)
    console.log("\nVetor SL (somas das linhas):");
    console.log(SL);

    // Impressão do vetor SC (somas das colunas)
    console.log("\nVetor SC (somas das colunas):");
    console.log(SC);
}

main();
