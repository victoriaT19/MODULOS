class hist{
    private node head;
    private node tail;
    private int tam; //tamanho atual
    private final int maxT; // tamanho maximo

    public hist(int maxT){
        this.maxT = maxT;
        this.tam = 0;
    }
    private static class node{
        String url;
        node next;

        node(String url){
            this.url = url;
            this.next = null;
        }
    }
    public void visitado(String url){ // adicionar a url que foi "visitada"
        node newNode = new node(url);

        if (tam == maxT)rem();

        if(head == null){
            head = newNode;
            tail = newNode;
        }else{
            tail.next = newNode;
            tail = newNode;
        }

        tam++;
    }
    private void rem(){ // remover a url mais antiga
        if(head != null){
            head = head.next;
            tam--;
        }
    }
    public void printar(){ // printar o "historico de navegação"
        node cur = head;
        System.out.println("Historico de navegação");
        while (cur != null){
            System.out.println(cur.url);
            cur = cur.next;
        }
    }

    public static void main(String[] args){
        hist historico = new hist(3);

        historico.visitado("https://github.com");
        historico.visitado("https://Twich.com");
        historico.visitado("https://stackoverflow.com");
        historico.printar();

        historico.visitado("https://github.com");
        historico.printar();

        historico.visitado("https://java.com");
        historico.printar();
    }
}
