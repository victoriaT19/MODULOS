abstract class FormaPagamento {
    public abstract void processarPagamento(double valor);
    public abstract boolean validarPagamento();
}

class CartaoCredito extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        System.out.println("Processando pagamento de R$" + valor + " via Cartão de Crédito.");
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando pagamento com Cartão de Crédito...");
        return true;
    }
}

class Boleto extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        System.out.println("Processando pagamento de R$" + valor + " via Boleto.");
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando pagamento com Boleto...");
        return true;
    }
}

class Pix extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        System.out.println("Processando pagamento de R$" + valor + " via Pix.");
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validando pagamento com Pix...");
        return true;
    }
}

class SistemaPagamentos {
    public static void main(String[] args) {
        FormaPagamento pagamento = new CartaoCredito();
        if (pagamento.validarPagamento()) {
            pagamento.processarPagamento(150.75);
        }

        pagamento = new Boleto();
        if (pagamento.validarPagamento()) {
            pagamento.processarPagamento(200.00);
        }

        pagamento = new Pix();
        if (pagamento.validarPagamento()) {
            pagamento.processarPagamento(350.50);
        }
    }
}
