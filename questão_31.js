const prompt = require('prompt-sync')();

function main() {
    // Ler o número inteiro A
    let A = parseInt(prompt('Digite um número inteiro A: '));

    // Inicializar e ler a matriz V de 30x30
    const size = 30;
    let V = [];
    for (let i = 0; i < size; i++) {
        V[i] = [];
        for (let j = 0; j < size; j++) {
            V[i][j] = parseInt(prompt(`Digite o elemento V[${i+1}][${j+1}]: `));
        }
    }

    // Contar quantos valores iguais a A estão na matriz V
    let countA = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (V[i][j] === A) {
                countA++;
            }
        }
    }

    // Criar a matriz X contendo os elementos diferentes de A
    let X = [];
    for (let i = 0; i < size; i++) {
        X[i] = [];
        for (let j = 0; j < size; j++) {
            if (V[i][j] !== A) {
                X[i][j] = V[i][j];
            }
        }
    }

    // Mostrar os resultados
    console.log(`Quantidade de valores iguais a A na matriz V: ${countA}`);
    console.log('Matriz X (elementos diferentes de A):');
    for (let i = 0; i < size; i++) {
        console.log(X[i].join('\t'));
    }
}

main();
