const prompt = require('prompt-sync')();

function main() {
    // Inicialização da matriz M[6][8] com valores de exemplo
    const M = [
        [0, -1, 2, -3, 4, -5, 6, -7],
        [-1, -2, 3, 4, -5, -6, 7, 8],
        [9, 10, -11, -12, 13, 14, -15, -16],
        [17, -18, 19, -20, 21, -22, 23, -24],
        [25, 26, 27, 28, -29, -30, 31, 32],
        [-33, 34, -35, 36, 37, -38, 39, -40]
    ];

    // Inicialização do vetor C para armazenar a contagem de negativos
    let C = new Array(6).fill(0);

    // Contagem de elementos negativos em cada linha de M
    for (let i = 0; i < M.length; i++) {
        let countNegatives = 0;
        for (let j = 0; j < M[i].length; j++) {
            if (M[i][j] < 0) {
                countNegatives++;
            }
        }
        C[i] = countNegatives;
    }

    // Impressão do vetor C
    console.log('Vetor C com a contagem de elementos negativos de cada linha da matriz M:');
    console.log(C);
}

main();
