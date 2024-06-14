const prompt = require('prompt-sync')();

function main() {
    const tamanhoGabarito = 20;
    const totalAlunos = 50;

    //Leitura do Gabarito
    console.log("Digite o Gabarito de 20 elementos:");
    let gabarito = [];
    for (let i = 0; i < tamanhoGabarito; i++) {
        gabarito[i] = prompt(`Questão ${i+1}: `);
    }

    //Leitura das Respostas dos Alunos e Contagem de Acertos
    for (let aluno = 1; aluno <= totalAlunos; aluno++) {
        console.log(`\nAluno ${aluno}:`);
        let respostas = [];
        let acertos = 0;

        // Ler as respostas do aluno
        for (let i = 0; i < tamanhoGabarito; i++) {
            respostas[i] = prompt(`Resposta ${i+1} do aluno: `);
            // Verificar se houve acerto
            if (respostas[i] === gabarito[i]) {
                acertos++;
            }
        }

        // Mostrar o número de acertos do aluno
        console.log(`Número de acertos: ${acertos}`);

        // Decidir se o aluno está APROVADO ou REPROVADO
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

main();
