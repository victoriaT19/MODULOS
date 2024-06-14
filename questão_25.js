const prompt = require('prompt-sync')();

function main() {
    // Inicialização da matriz M[15][20] com valores de exemplo
    const rows = 15;
    const cols = 20;
    let M = [];

    // Leitura dos valores da matriz
    console.log("Digite os valores da matriz 15x20:");
    for (let i = 0; i < rows; i++) {
        M[i] = [];
        for (let j = 0; j < cols; j++) {
            M[i][j] = parseFloat(prompt(`Elemento [${i+1}][${j+1}]: `));
        }
    }

    // Inicialização do vetor de somas das colunas
    let sumColumns = new Array(cols).fill(0);

    // Cálculo da soma de cada coluna
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            sumColumns[j] += M[i][j];
        }
    }

    // Impressão das somas das colunas
    console.log('Soma de cada coluna:');
    for (let j = 0; j < cols; j++) {
        console.log(`Coluna ${j + 1}: ${sumColumns[j].toFixed(2)}`);
    }
}

// Chama a função principal
main();
