const prompt = require('prompt-sync')();

function main() {
    const size = 10;
    let matriz = [];

    // Inicialização da matriz 10x10 e leitura dos valores
    console.log("Digite os valores da matriz 10x10:");
    for (let i = 0; i < size; i++) {
        matriz[i] = [];
        for (let j = 0; j < size; j++) {
            matriz[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    // Inicialização das variáveis para as somas
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;

    // Cálculo das somas
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j > i) {
                // Elementos acima da diagonal principal
                somaAcimaDiagonal += matriz[i][j];
            }
            if (i > j) {
                // Elementos abaixo da diagonal principal
                somaAbaixoDiagonal += matriz[i][j];
            }
        }
    }

    // Impressão dos resultados
    console.log(`Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`);
    console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`);
}

main();
