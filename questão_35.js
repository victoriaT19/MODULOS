const prompt = require('prompt-sync')();

function main() {
    const totalValores = 30;
    const tamanhoVetor = 5;
    let vetorPares = [];
    let vetorImpares = [];
    let contPares = 0;
    let contImpares = 0;

    // Loop para ler os 30 valores
    for (let i = 0; i < totalValores; i++) {
        let valor = parseFloat(prompt(`Digite o ${i + 1}º valor: `));

        if (valor % 2 === 0) {
            // Valor par
            vetorPares.push(valor);
            contPares++;
        } else {
            // Valor ímpar
            vetorImpares.push(valor);
            contImpares++;
        }

        // Se vetor de pares atingir tamanho máximo, imprime e reinicia
        if (contPares === tamanhoVetor) {
            console.log("Vetor de Pares:", vetorPares);
            vetorPares = [];
            contPares = 0;
        }

        // Se vetor de ímpares atingir tamanho máximo, imprime e reinicia
        if (contImpares === tamanhoVetor) {
            console.log("Vetor de Ímpares:", vetorImpares);
            vetorImpares = [];
            contImpares = 0;
        }
    }

    // Após a leitura, imprimir os vetores restantes se não estiverem vazios
    if (contPares > 0) {
        console.log("Vetor de Pares:", vetorPares);
    }
    if (contImpares > 0) {
        console.log("Vetor de Ímpares:", vetorImpares);
    }
}

main();
