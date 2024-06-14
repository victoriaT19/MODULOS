function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    
    // Calcula o peso ideal com base no sexo
    if (sexo.toLowerCase() === 'm') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === 'f') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        return 'Sexo inválido. Use "M" para masculino ou "F" para feminino.';
    }
    
    return pesoIdeal.toFixed(2);
}

// Exemplo de uso da função
const prompt = require('prompt-sync')();

const altura = parseFloat(prompt('Digite a altura da pessoa (em metros): '));
const sexo = prompt('Digite o sexo da pessoa (M para masculino, F para feminino): ');

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (isNaN(pesoIdeal)) {
    console.log(pesoIdeal);
} else {
    console.log(`O peso ideal para a pessoa é: ${pesoIdeal} kg`);
}
