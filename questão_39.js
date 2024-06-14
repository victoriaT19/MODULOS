const prompt = require('prompt-sync')();

function main() {
    //Leitura do vetor A de 100 posições
    let A = [];
    console.log("Digite os elementos do vetor A de 100 posições:");
    for (let i = 0; i < 100; i++) {
        A[i] = parseInt(prompt(`Elemento ${i+1}: `));
    }

    //Compactação do vetor A para o vetor B
    let B = [];
    let j = 0; // Índice para o vetor B

    for (let i = 0; i < 100; i++) {
        if (A[i] > 0) { // Adiciona apenas valores positivos a B
            B[j] = A[i];
            j++;
        }
    }

    //Exibição do vetor B
    console.log("\nVetor B (após compactação):");
    console.log(B);
}

main();
