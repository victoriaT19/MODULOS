const prompt = require('prompt-sync')();

function main() {
    const tamanhoGabarito = 13;
    const totalApostadores = 100;

    //Leitura do Gabarito
    console.log("Digite o Gabarito de 13 elementos:");
    let gabarito = [];
    for (let i = 0; i < tamanhoGabarito; i++) {
        gabarito[i] = parseInt(prompt(`Gabarito[${i+1}]: `));
    }

    //Leitura das Respostas dos Apostadores e Verificação de Acertos
    for (let apostador = 1; apostador <= totalApostadores; apostador++) {
        console.log(`\nApostador ${apostador}:`);
        let cartao = prompt(`Número do cartão do apostador: `);
        let respostas = [];
        let acertos = 0;

        // Ler as respostas do apostador
        for (let i = 0; i < tamanhoGabarito; i++) {
            respostas[i] = parseInt(prompt(`Resposta ${i+1}: `));
            // Verificar se houve acerto
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

        // Mostrar o número do apostador e o número de acertos
        console.log(`Número do cartão: ${cartao}`);
        console.log(`Número de acertos: ${acertos}`);

        // Verificar se o apostador teve 13 acertos
        if (acertos === tamanhoGabarito) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    }
}

main();
