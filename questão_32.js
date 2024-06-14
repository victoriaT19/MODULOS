const prompt = require('prompt-sync')();

function main() {
    const linhas = 12;
    const colunas = 13;
    let M = [];

    //Leitura da matriz M(12,13)
    console.log("Digite os valores da matriz M(12,13):");
    for (let i = 0; i < linhas; i++) {
        M[i] = [];
        for (let j = 0; j < colunas; j++) {
            M[i][j] = parseFloat(prompt(`M[${i+1}][${j+1}]: `));
        }
    }

    //Divisão dos elementos de cada linha pelo maior elemento em módulo da linha
    for (let i = 0; i < linhas; i++) {
        // Encontrar o maior elemento em módulo da linha
        let maiorModulo = Math.abs(M[i][0]);
        for (let j = 1; j < colunas; j++) {
            let moduloAtual = Math.abs(M[i][j]);
            if (moduloAtual > maiorModulo) {
                maiorModulo = moduloAtual;
            }
        }

        //Dividir todos os elementos da linha pelo maior elemento em módulo
        for (let j = 0; j < colunas; j++) {
            M[i][j] /= maiorModulo;
        }
    }

    //Impressão da matriz original e modificada
    console.log("\nMatriz M(12,13) Original:");
    imprimirMatriz(M);

    console.log("\nMatriz M(12,13) Modificada:");
    imprimirMatriz(M);
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

main();
