const prompt = require('prompt-sync')();

function main() {
    //Leitura do resultado oficial da Loto
    console.log("Digite os números do resultado oficial da Loto (5 números):");
    let resultadoOficial = [];
    for (let i = 0; i < 5; i++) {
        resultadoOficial[i] = parseInt(prompt(`Número ${i+1}: `));
    }

    //Leitura das 50 apostas
    console.log("\nDigite as 50 apostas (cada aposta com 5 números):");
    let apostas = [];
    for (let i = 0; i < 50; i++) {
        apostas[i] = [];
        for (let j = 0; j < 5; j++) {
            apostas[i][j] = parseInt(prompt(`Aposta ${i+1}, Número ${j+1}: `));
        }
    }

    //Comparação com o resultado oficial e exibição de "Ganhador" se houver correspondência
    let ganhadores = [];
    for (let i = 0; i < 50; i++) {
        let acertos = 0;
        for (let j = 0; j < 5; j++) {
            if (apostas[i][j] === resultadoOficial[j]) {
                acertos++;
            }
        }
        if (acertos === 5) {
            ganhadores.push(i + 1); // Armazena o número da aposta vencedora (índice + 1)
        }
    }

    //Exibição dos ganhadores
    if (ganhadores.length > 0) {
        console.log("\nApostas vencedoras:");
        ganhadores.forEach((aposta) => {
            console.log(`Aposta ${aposta} é Ganhadora!`);
        });
    } else {
        console.log("\nNão há apostas vencedoras.");
    }
}

main();
