/**
 * Função que transforma um objeto aplicando uma função fornecida a cada propriedade
 * @param {object} objeto - Objeto de entrada
 * @param {function} funcaoTransformacao - Função a ser aplicada a cada propriedade do objeto
 * @returns {object} - Novo objeto com as propriedades transformadas
 */
function transformarObjeto(objeto, funcaoTransformacao) {
    // Inicializa um novo objeto vazio
    let novoObjeto = {};

    // Percorre todas as propriedades do objeto de entrada
    for (let propriedade in objeto) {
        // Verifica se a propriedade pertence ao próprio objeto (e não ao protótipo)
        if (objeto.hasOwnProperty(propriedade)) {
            // Aplica a função fornecida à propriedade e atribui ao novo objeto
            novoObjeto[propriedade] = funcaoTransformacao(objeto[propriedade]);
        }
    }

    return novoObjeto;
}

// Exemplo de objeto de entrada
let objetoEntrada = {
    nome: "João",
    idade: 30,
    salario: 5000
};

// Função de transformação que duplica o valor numérico
function dobrarValor(valor) {
    if (typeof valor === 'number') {
        return valor * 2;
    }
    return valor; // Retorna o valor sem alteração se não for número
}



let objetoTransformado = transformarObjeto(objetoEntrada, dobrarValor);

console.log("Objeto transformado:");
console.log(objetoTransformado);
