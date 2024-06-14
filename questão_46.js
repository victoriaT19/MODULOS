// Função para sumarizar vendas por vendedor
function sumarizarVendasPorVendedor(vendas) {
    let sumario = {};

    // Percorre o array de vendas
    for (let venda of vendas) {
        let vendedor = venda.vendedor;
        let valor = venda.valor;

        // Verifica se o vendedor já existe no sumário
        if (sumario[vendedor]) {
            sumario[vendedor] += valor; // Adiciona o valor da venda ao total do vendedor
        } else {
            sumario[vendedor] = valor; // Inicializa o total do vendedor com o valor da venda
        }
    }

    return sumario;
}

// Exemplo de array de objetos representando vendas
let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 150 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Pedro", valor: 120 },
    { vendedor: "Maria", valor: 80 },
    { vendedor: "Pedro", valor: 170 }
];

let resultado = sumarizarVendasPorVendedor(vendas);
console.log("Sumário de vendas por vendedor:");
console.log(resultado);
