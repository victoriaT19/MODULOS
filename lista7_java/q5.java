class jogoCartas{
    private mao head;
    private mao tail;
    private int tam;

    private static class mao{
        String carta;
        mao next;
        mao prev;

        mao(String carta){
            this.carta = carta;
        }
    }

    public jogoCartas(){
        this.head = null;
        this.tail = null;
        this.tam = 0;
    }

    public void add(String carta){
        mao no = new mao(carta);
        if (head == null){
            head = no;
            tail = no;
        }else{
            tail.next = no;
            no.prev = tail;
            tail = no;
        }
        tam++;
        System.out.println("Carta adicionada " + carta);
    }

    public void rem(String carta){
        mao cur = head;

        while (cur != null){
            if (cur.carta.equals(carta)) {
                if(cur.prev != null) cur.prev.next = cur.next;
                else head = cur.next;

                if(cur.next != null){
                    cur.next.prev = cur.prev;
                }else{
                    tail = cur.prev;
                }
                tam--;
                System.out.println("Carta Removida: " + carta);
                return;
            }
            cur = cur.next;
        }
        System.out.println( carta + " não foi encontrada");
    }

    public void mov(String carta, int pos){
        if(pos < 1 || pos > tam){
            System.out.println("movimento inválido");
            return;
        }

        mao cur = head;
        int idx = 1;

        while (cur != null && !cur.carta.equals(carta)){
            cur = cur.next;
            idx++;
        }

        if(cur == null){
            System.out.println( carta + " não encontrada");
            return;
        }

        if(cur.prev != null){
            cur.prev.next = cur.next;
        } else{
            head = cur.next;
        }

        if (cur.next != null){
            cur.next.prev = cur.prev;
        }else {
            tail = cur.prev;
        }

        mao no = new mao(carta);
        if(pos == 1){
            no.next = head;
            if(head != null){
                head.prev = no;
            }
            head = no;
            if (tail == null){
              tail = no;
            }
        }
        else if (pos == tam) {
            no.prev = tail;
            if(tail != null){
                tail.next = no;
            }
            tail = no;
        }
        else{
            mao mid = head;
            for (int i = 1; i < pos; i++){
                mid = mid.next;
            }
            no.prev = mid.prev;
            no.next = mid;

            if (mid.prev != null){
                mid.prev.next = no;
            }
            mid.prev = no;
        }

        System.out.println(carta + " foi movida para a posição " + pos);
    }

    public void printar(){
        mao cur = head;
        System.out.println("Cartas do jogador");
        while(cur != null){
            System.out.print(cur.carta + " | ");
            cur = cur.next;
        }
        System.out.printf("\n");
    }

    public static void main(String[] args){
        jogoCartas jogo = new jogoCartas();

        jogo.add("Ás de Copas");
        jogo.add("Rei de Ouros");
        jogo.add("Valete de Paus");
        jogo.add("Dama de Espadas");

        jogo.printar();

        jogo.rem("Rei de Ouros");
        jogo.printar();

        jogo.mov("Dama de Espadas", 1);
        jogo.printar();
    }
}
