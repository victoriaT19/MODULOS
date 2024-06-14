const prompt = require('prompt-sync')();

function main() {
    //Leitura do vetor de 6 posições
    let vetor = [];
    console.log("Digite os elementos do vetor de 6 posições:");
    for (let i = 0; i < 6; i++) {
        vetor[i] = parseInt(prompt(`Elemento ${i+1}: `));
    }

    //Leitura da variável identificadora
    console.log("\nEscolha a operação a ser realizada:");
    console.log("1 - Soma dos elementos");
    console.log("2 - Produto dos elementos");
    console.log("3 - Média dos elementos");
    console.log("4 - Ordenar os elementos em ordem crescente");
    console.log("5 - Mostrar o vetor");
    let operacao = parseInt(prompt("Digite o número da operação: "));

    // Execução da operação escolhida
    switch (operacao) {
        case 1:
            // Soma dos elementos
            let soma = 0;
            for (let i = 0; i < 6; i++) {
                soma += vetor[i];
            }
            console.log(`\nSoma dos elementos: ${soma}`);
            break;
        case 2:
            // Produto dos elementos
            let produto = 1;
            for (let i = 0; i < 6; i++) {
                produto *= vetor[i];
            }
            console.log(`\nProduto dos elementos: ${produto}`);
            break;
        case 3:
            // Média dos elementos
            let total = 0;
            for (let i = 0; i < 6; i++) {
                total += vetor[i];
            }
            let media = total / 6;
            console.log(`\nMédia dos elementos: ${media}`);
            break;
        case 4:
            // Ordenar os elementos em ordem crescente
            vetor.sort((a, b) => a - b);
            console.log("\nVetor ordenado em ordem crescente:");
            console.log(vetor);
            break;
        case 5:
            // Mostrar o vetor
            console.log("\nVetor informado:");
            console.log(vetor);
            break;
        default:
            console.log("Opção inválida.");
    }
}

main();
