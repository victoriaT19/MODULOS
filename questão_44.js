// Exemplo de objeto
let objeto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["esportes", "música", "leitura"]
};

// Função para contar propriedades do tipo string em um objeto
function contarPropriedadesString(obj) {
    let contador = 0;

    // Percorre as propriedades do objeto
    for (let chave in obj) {
        // Verifica se o valor da propriedade é uma string
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }

    return contador;
}

// Chamada da função e exibição do resultado
let numeroStrings = contarPropriedadesString(objeto);
console.log("Número de propriedades do tipo string:", numeroStrings);
