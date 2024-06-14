const prompt = require('prompt-sync')();

function main() {
    const rows = 6;
    const cols = 6;
    let M = [];

    // Inicialização da matriz M[6][6] e leitura dos valores
    console.log("Digite os valores da matriz M[6][6]:");
    for (let i = 0; i < rows; i++) {
        M[i] = [];
        for (let j = 0; j < cols; j++) {
            M[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    // Leitura do valor de A
    let A = parseFloat(prompt("Digite o valor de A: "));

    // Inicialização do vetor V para armazenar os valores multiplicados
    let V = new Array(rows * cols);

    // Multiplicação da matriz M por A e armazenamento em V
    let index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            V[index++] = M[i][j] * A;
        }
    }

    // Impressão do vetor V
    console.log("Vetor V[36] com os valores de M multiplicados por A:");
    console.log(V);
}

main();
