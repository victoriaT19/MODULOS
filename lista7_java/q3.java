class editor{
    private node head;

    private static class node{
        String texto;
        node next;

        node(String texto){
            this.texto = texto;
            this.next = null;
        }
    }

    public editor(){
        this.head = null;
    }

    //funciona como uma pilha

    public void Do(String texto){
        node newNode = new node(texto);
        newNode.next = head;
        head = newNode;
        System.out.println("Ação Realizada: " + texto);
    }
    public void undo(){
        if (head == null){
            System.out.println("Nenhuma ação para desfazer");
            return;
        }

        System.out.println("Desfazendo a ação: " + head.texto);
        head = head.next;
    }
    public void printar(){ //printar as ações realizadas
        node cur = head;
        System.out.println("Histórico:");
        while(cur != null){
            System.out.println(cur.texto);
            cur = cur.next;
        }
    }

    public static void main(String[] args){
        editor Editor = new editor();

        Editor.Do("Olá, mundo");
        Editor.Do("Bem vindos ao edito de texto");
        Editor.Do("Desfaça agora");

        Editor.printar();

        Editor.undo();
        Editor.printar();

        Editor.undo();
        Editor.printar();
    }
}
