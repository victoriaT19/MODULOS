class filaImpressao{
    private node head;
    private node tail;

    private static class node{
        String nome;
        node next;

        node(String nome){
            this.nome = nome;
            this.next = null;
        }
    }

    public filaImpressao(){
        this.head = null;
        this.tail = null;
    }

    public void add(String nome){
        node no =  new node(nome);

        if (tail == null){
            head = no;
            tail = no;
        }
        else{
            tail.next = no;
            tail = no;
        }

        System.out.println(nome + " está na fila de impressão.");
    }

    public void imprimir(){
        if (head == null) System.out.println("não há nenhum trabalho na fila.");
        else{
            System.out.println(head.nome + " foi impresso");
            head = head.next;
            if (head == null) tail = null;
        }
    }

    public void mostrar(){
        if (head == null){
            System.out.println("A fila de impressão está vazia");
            return;
        }
        node cur = head;
        System.out.println("Fila de impressão");
        while (cur != null){
            System.out.println(cur.nome);
            cur = cur.next;
        }
        System.out.println();
    }

    public static void main(String[] args){
        filaImpressao Fila = new filaImpressao();

        Fila.add("TCC de Mariah");
        Fila.add("Relatorio de pesquisa de Paula");
        Fila.add("Copia de RG de Fernando");
        Fila.add("Imagem PNG de Lucas");
        Fila.add("Tese de mestrado de Rebekah");
        Fila.mostrar();

        Fila.imprimir();
        Fila.mostrar();

        Fila.imprimir();
        Fila.imprimir();
        Fila.mostrar();

        Fila.imprimir();
        Fila.mostrar();

        Fila.imprimir();
        Fila.mostrar();
    }
}
