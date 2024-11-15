class TM{
    private Task head;

    private static class Task{
        String des;
        boolean status;
        Task next;

        Task(String des){
            this.des = des;
            this.status = false;
            this.next = null;
        }
    }

    public void add(String des){
        Task newTask = new Task(des);
        if(head == null){
            head = newTask;
        }else{
            Task cur = head;
            while(cur.next != null){
                cur = cur.next;
            }
            cur.next = newTask;
        }
        System.out.println("Tarefa adicionada:" + des);
    }

    public void rem(int idx){
        if(head == null || idx < 0){
            System.out.println("Essa tarefa não existe");
            return;
        }
        if(idx == 0){
            System.out.println("Essa tarefa foi removida: " + head.des);
            head = head.next;
            return;
        }
        else{
            Task cur = head;
            Task pre = null;
            int cnt = 0;

            while(cur != null && cnt < idx){
                pre = cur;
                cur = cur.next;
                cnt++;
            }
            if(cur == null){
                System.out.println("Indice Inválido");
                return;
            }

            System.out.println("Essa tarefa foi removida: "+ cur.des);
            pre.next = cur.next;
        }
    }

    public void Status(int idx){
        Task cur = head;
        int cnt = 0;

        while(cur != null && cnt < idx){
            cur = cur.next;
            cnt++;
        }
        if(cur == null){
            System.out.println("Indice Inválido");
            return;
        }

        System.out.println("Tarefa Finalizada: " + cur.des);
        cur.status = true;
    }

    public void listar(){
        if(head == null){
            System.out.println("Sem tarefas.");
            return;
        }

        Task cur = head;
        int idx = 1;
        while(cur != null){
            System.out.println(idx + ". " + cur.des + " - Status: " + ((cur.status)? "Concluída" : "Em andamento"));
            cur = cur.next;
            idx++;
        }

    }
    public static void main(String[]args){
        TM adm = new TM();

        adm.add("Ler livro");
        adm.add("Estudar java");
        adm.add("Passear com cachorro");
        adm.add("Ir as compras");

        adm.listar();

        adm.Status(0);
        adm.Status(2);

        adm.listar();

        adm.rem(0);

        adm.listar();

        adm.Status(2);

        adm.listar();

    }
}
