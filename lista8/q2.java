class Produto {
    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        this.nome = nome;
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }
    public double getPreco() {
        return preco;
    }
    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setPreco(double preco) {
        if (preco >= 0) {
            this.preco = preco;
        } else {
            System.out.println("O preço não pode ser negativo.");
        }
    }
    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque >= 0) {
            this.quantidadeEmEstoque = quantidadeEmEstoque;
        } else {
            System.out.println("A quantidade em estoque não pode ser negativa.");
        }
    }

    public void aplicarDesconto(double porcentagem) throws IllegalArgumentException {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("Desconto inválido: a porcentagem deve estar entre 0 e 50.");
        }
        this.preco -= this.preco * (porcentagem / 100);
    }


    public void exibirProduto() {
        System.out.println("Produto: " + nome);
        System.out.println("Preço: R$ " + preco);
        System.out.println("Quantidade em Estoque: " + quantidadeEmEstoque);
    }

    public static void main(String[] args){

        try {
            Produto produto1 = new Produto("Smartphone", 1500.00, 10);
            System.out.println("Antes do desconto:");
            produto1.exibirProduto();
            produto1.aplicarDesconto(20);

            System.out.println("\nApós aplicar 20% de desconto:\n");
            produto1.exibirProduto();
            produto1.aplicarDesconto(60);
        }
        catch (IllegalArgumentException e) {

            System.out.println("\nErro: " + e.getMessage());
        }
    }
}
