// Função para contar ocorrências de strings em um array e criar um objeto com essas contagens
function contarOcorrencias(array) {
    let contador = {};

    // Percorre o array de strings
    array.forEach(item => {
        // Verifica se o item já existe como chave no objeto contador
        if (contador[item]) {
            contador[item]++; // Incrementa a contagem se já existe
        } else {
            contador[item] = 1; // Inicia a contagem se não existe ainda
        }
    });

    return contador;
}

// Exemplo de array de strings
let arrayStrings = ["maçã", "banana", "laranja", "maçã", "maçã", "laranja"];

let resultado = contarOcorrencias(arrayStrings);
console.log("Objeto com contagem de ocorrências:");
console.log(resultado);
