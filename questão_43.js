// Exemplo de objetos obj1 e obj2
let obj1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

let obj2 = {
    idade: 31,
    email: "joao@example.com"
};

// Função para combinar propriedades de dois objetos
function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    // Copiar todas as propriedades de obj1 para o novo objeto
    for (let chave in obj1) {
        novoObjeto[chave] = obj1[chave];
    }

    // Adicionar ou sobrescrever as propriedades de obj2 no novo objeto
    for (let chave in obj2) {
        novoObjeto[chave] = obj2[chave];
    }

    return novoObjeto;
}

// Chamada da função e exibição do novo objeto combinado
let objetoCombinado = combinarObjetos(obj1, obj2);
console.log("Novo objeto combinado:");
console.log(objetoCombinado);
