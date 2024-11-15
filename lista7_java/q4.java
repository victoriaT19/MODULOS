class editor{
    private node head;
    private node cur;

    private static class node{
        String texto;
        node next;
        node prev;

        node(String texto){
            this.texto = texto;
        }
    }

    public editor(){
        this.head = null;
        this.cur = null;
    }

    public void Do(String texto){
        node newNode = new node(texto);
        if (cur != null && cur.next != null){
            cur.next = null;
        }
        if (head == null){
            head = newNode;
        }else {
            cur.next = newNode;
            newNode.prev = cur;
        }

        cur = newNode;
        System.out.println(texto);

    }
    public void undo(){
        if (cur == null){
            System.out.println("Nenhuma ação para desfazer");
            return;
        }

        System.out.println("Desfazendo a ação: " + cur.texto);
        cur = cur.prev;
    }
    public void redo(){
        if (cur == null || cur.next == null){
            System.out.println("Nada para refazer");
            return;
        }
        cur = cur.next;
        System.out.println("Refazendo a ação: " + cur.texto);
    }
    public void printar(){ //printar as ações realizadas
        node no = head;
        System.out.println("Histórico:");
        while(no != null){
            System.out.println(no.texto);
            if (no == cur) return;
            no = no.next;
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

        Editor.redo();
        Editor.printar();
    }
}
