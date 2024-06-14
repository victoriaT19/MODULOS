/**
 * Função para combinar dois inventários de lojas
 * @param {object} inventarioLojaA - Inventário da Loja A (objeto)
 * @param {object} inventarioLojaB - Inventário da Loja B (objeto)
 * @returns {object} - Inventário combinado das duas lojas
 */
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    // Cria um novo objeto para o inventário combinado
    let inventarioCombinado = {};

    // Percorre todas as chaves do inventário da Loja A
    for (let item in inventarioLojaA) {
        // Verifica se o item existe no inventário combinado
        if (inventarioCombinado[item]) {
            // Se existir, soma as quantidades dos dois inventários
            inventarioCombinado[item] += inventarioLojaA[item];
        } else {
            // Se não existir, adiciona o item com sua quantidade
            inventarioCombinado[item] = inventarioLojaA[item];
        }
    }

    // Percorre todas as chaves do inventário da Loja B
    for (let item in inventarioLojaB) {
        // Verifica se o item existe no inventário combinado
        if (inventarioCombinado[item]) {
            // Se existir, soma as quantidades dos dois inventários
            inventarioCombinado[item] += inventarioLojaB[item];
        } else {
            // Se não existir, adiciona o item com sua quantidade
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}

// Exemplo de inventários das lojas A e B
let inventarioLojaA = {
    "camisetas": 50,
    "calças": 30,
    "meias": 100
};

let inventarioLojaB = {
    "camisetas": 20,
    "calças": 40,
    "bonés": 50
};

let inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("Inventário combinado das lojas:");
console.log(inventarioTotal);
