/**
 * Função para agrupar transações por categoria e calcular o subtotal de valores por categoria
 * @param {array} transacoes - Array de objetos representando transações financeiras
 * @returns {object} - Objeto onde as chaves são as categorias e os valores são arrays de transações e subtotal de valores por categoria
 */
function agruparTransacoesPorCategoria(transacoes) {
    // Objeto para armazenar as transações agrupadas por categoria
    let transacoesPorCategoria = {};

    // Percorre o array de transações
    transacoes.forEach(transacao => {
        let { id, valor, data, categoria } = transacao;

        // Verifica se a categoria já existe no objeto transacoesPorCategoria
        if (!transacoesPorCategoria[categoria]) {
            // Se não existir, cria um novo array para essa categoria e inicializa o subtotal
            transacoesPorCategoria[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        // Adiciona a transação ao array de transações da categoria
        transacoesPorCategoria[categoria].transacoes.push(transacao);
        // Atualiza o subtotal da categoria somando o valor da transação
        transacoesPorCategoria[categoria].subtotal += valor;
    });

    return transacoesPorCategoria;
}

// Exemplo de array de transações
let transacoes = [
    { id: 1, valor: 100, data: '2024-06-15', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-06-14', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-06-13', categoria: 'Alimentação' },
    { id: 4, valor: 80, data: '2024-06-12', categoria: 'Lazer' },
    { id: 5, valor: 120, data: '2024-06-11', categoria: 'Transporte' },
    { id: 6, valor: 150, data: '2024-06-10', categoria: 'Alimentação' },
];

let resultado = agruparTransacoesPorCategoria(transacoes);

console.log("Transações agrupadas por categoria e subtotal de valores:");
console.log(resultado);
