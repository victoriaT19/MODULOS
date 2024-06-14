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

    // Inicialização das variáveis para as somas
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    // Cálculo das somas
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // Soma da linha 4 (índice 3) da matriz
            if (i === 3) {
                somaLinha4 += matriz[i][j];
            }
            // Soma da coluna 2 (índice 1) da matriz
            if (j === 1) {
                somaColuna2 += matriz[i][j];
            }
            // Soma da diagonal principal
            if (i === j) {
                somaDiagonalPrincipal += matriz[i][j];
            }
            // Soma total de todos os elementos da matriz
            somaTotal += matriz[i][j];
        }
    }

    // Impressão da matriz M e das somas calculadas
    console.log("\nMatriz M[5][5]:");
    for (let i = 0; i < size; i++) {
        console.log(matriz[i].join('\t'));
    }
    console.log("\nSomas:");
    console.log(`a) Soma da linha 4: ${somaLinha4}`);
    console.log(`b) Soma da coluna 2: ${somaColuna2}`);
    console.log(`c) Soma da diagonal principal: ${somaDiagonalPrincipal}`);
    console.log(`d) Soma total dos elementos da matriz: ${somaTotal}`);
}

main();
