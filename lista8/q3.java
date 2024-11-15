class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public double calcularBonus() {
        return 0.0;
    }

    public void exibirInformacoes() {
        System.out.println("Nome: " + nome);
        System.out.println("Salário: R$ " + salario);
        System.out.println("Bônus: R$ " + calcularBonus());
    }
}

class Gerente extends Funcionario {
    public Gerente(String nome, double salario) {
        super(nome, salario);
    }
    @Override
    public double calcularBonus() {
        return salario * 0.20;
    }
}

class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularBonus() {
        return salario * 0.10;
    }
}

class Main {
    public static void main(String[] args) {
        Funcionario gerente = new Gerente("Alice", 5000.00);
        Funcionario desenvolvedor = new Desenvolvedor("Bob", 4000.00);

        System.out.println("Informações do Gerente:");
        gerente.exibirInformacoes();

        System.out.println("\nInformações do Desenvolvedor:");
        desenvolvedor.exibirInformacoes();
    }
}
