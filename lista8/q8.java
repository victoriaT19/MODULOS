abstract class Funcionario {
    private String nome;
    private double salarioBase;

    public Funcionario(String nome, double salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    public String getNome() {
        return nome;
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public abstract double calcularSalario();
    public abstract double calcularBonus();
}

class Gerente extends Funcionario {
    public Gerente(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 1.2;
    }

    @Override
    public double calcularBonus() {
        return 1000;
    }
}

class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase();
    }

    @Override
    public double calcularBonus() {
        return getSalarioBase() * 0.1;
    }
}

class Estagiario extends Funcionario {
    public Estagiario(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 0.8;
    }

    @Override
    public double calcularBonus() {
        return 0;
    }
}

class SistemaGestaoFuncionarios {
    public static void main(String[] args) {
        Funcionario[] funcionarios = new Funcionario[] {
                new Gerente("João", 5000),
                new Desenvolvedor("Maria", 4000),
                new Estagiario("Carlos", 1500)
        };

        double totalSalarios = 0;
        double totalBonus = 0;

        for (Funcionario f : funcionarios) {
            System.out.println("Funcionario: " + f.getNome());
            System.out.println("Salário: R$" + f.calcularSalario());
            System.out.println("Bônus: R$" + f.calcularBonus());
            totalSalarios += f.calcularSalario();
            totalBonus += f.calcularBonus();
            System.out.println();
        }

        System.out.println("Total de salários: R$" + totalSalarios);
        System.out.println("Total de bônus: R$" + totalBonus);
    }
}
