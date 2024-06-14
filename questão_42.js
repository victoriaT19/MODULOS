// Objeto dados com várias propriedades
let dados = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    numeros: [1, 2, 3],
    frutas: ["maçã", "banana", "laranja"],
    interesses: ["esportes", "música", "leitura"],
    endereco: {
        rua: "Rua Principal",
        numero: 123
    }
};

// Função para filtrar e retornar um novo objeto com propriedades que são arrays
function filtrarArrays(objeto) {
    let novoObjeto = {};

    // Percorre as propriedades do objeto
    for (let chave in objeto) {
        // Verifica se a propriedade é um array
        if (Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave];
        }
    }

    return novoObjeto;
}

// Chamada da função e exibição do novo objeto apenas com as propriedades que são arrays
let dadosArrays = filtrarArrays(dados);
console.log("Novo objeto com propriedades que são arrays:");
console.log(dadosArrays);
