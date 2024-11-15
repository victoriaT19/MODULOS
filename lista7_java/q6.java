class fila{
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

    public fila(){
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

        System.out.println(nome + " entrou na fila.");
    }

    public void atender(){ //atendimento dos clientes da fila
        if (head == null) System.out.println("ninguem esta na fila.");
        else{
            System.out.println("chamando " + head.nome + " para o atendimento");
            head = head.next;
            if (head == null) tail = null;
        }
    }

    public void mostrar(){
        if (head == null){
            System.out.println("A fila está vazia");
            return;
        }
        node cur = head;
        System.out.println("Fila");
        while (cur != null){
            System.out.println(cur.nome);
            cur = cur.next;
        }
    }

    public static void main(String[] args){
        fila Fila = new fila();

        Fila.add("joão");
        Fila.add("Leticia");
        Fila.add("Fernando");
        Fila.add("Lucas");
        Fila.add("Rebekah");
        Fila.mostrar();

        Fila.atender();
        Fila.mostrar();

        Fila.atender();
        Fila.atender();
        Fila.mostrar();

        Fila.atender();
        Fila.mostrar();

        Fila.atender();
        Fila.mostrar();
    }
}
