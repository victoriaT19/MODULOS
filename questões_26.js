const prompt = require('prompt-sync')();

function main() {
    const rows = 3;
    const cols = 5;

    // Inicialização das matrizes A e B
    let A = [];
    let B = [];

    // Leitura dos valores da matriz A
    console.log("Digite os valores da matriz A[3][5]:");
    for (let i = 0; i < rows; i++) {
        A[i] = [];
        for (let j = 0; j < cols; j++) {
            A[i][j] = parseFloat(prompt(`A[${i+1}][${j+1}]: `));
        }
    }

    // Leitura dos valores da matriz B
    console.log("Digite os valores da matriz B[3][5]:");
    for (let i = 0; i < rows; i++) {
        B[i] = [];
        for (let j = 0; j < cols; j++) {
            B[i][j] = parseFloat(prompt(`B[${i+1}][${j+1}]: `));
        }
    }

    // Inicialização da matriz P
    let P = [];

    // Cálculo da matriz produto P
    for (let i = 0; i < rows; i++) {
        P[i] = [];
        for (let j = 0; j < cols; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }

    // Impressão da matriz produto P
    console.log("Matriz Produto P[3][5]:");
    for (let i = 0; i < rows; i++) {
        console.log(P[i].join(' '));
    }
}

main();
