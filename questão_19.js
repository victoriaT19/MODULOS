const prompt = require('prompt-sync')();

// Vetor para armazenar os horários
let horarios = [];

// Loop para ler e validar 5 horários
for (let i = 0; i < 5; i++) {
    let horarioValido = false;
    let horario;

    // Repete até que um horário válido seja fornecido
    while (!horarioValido) {
        horario = prompt(`Digite o ${i + 1}º horário (formato HH:MM:SS): `);

        // Verifica se o horário está no formato correto HH:MM:SS
        if (/^\d{2}:\d{2}:\d{2}$/.test(horario)) {
            horarioValido = true;
        } else {
            console.log('Formato inválido. Por favor, digite no formato HH:MM:SS.');
        }
    }

    // Adiciona o horário válido ao vetor de horários
    horarios.push(horario);
}

// Exibe os horários formatados no formato HH.MM.SS
console.log('\nHorários no formato HH.MM.SS:');
for (let horario of horarios) {
    console.log(horario.replace(/:/g, '.'));
}
