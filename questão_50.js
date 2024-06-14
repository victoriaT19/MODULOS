// Objeto para armazenar hotéis e reservas
let sistemaReservas = {
    // Array de hotéis
    hoteis: [],
    // Array de reservas
    reservas: [],
    // Contador para gerar IDs únicos de hotéis e reservas
    contadorHotel: 1,
    contadorReserva: 1,
  
    // Método para adicionar um novo hotel ao sistema
    adicionarHotel: function(nome, cidade, quartosTotais) {
        let novoHotel = {
            id: this.contadorHotel++,
            nome: nome,
            cidade: cidade,
            quartosTotais: quartosTotais,
            quartosDisponiveis: quartosTotais
        };
        this.hoteis.push(novoHotel);
        console.log(`Hotel ${nome} adicionado com sucesso.`);
    },
  
    // Método para buscar hotéis por cidade
    buscarHoteisPorCidade: function(cidade) {
        let encontrados = this.hoteis.filter(hotel => hotel.cidade === cidade);
        if (encontrados.length === 0) {
            console.log(`Nenhum hotel encontrado em ${cidade}.`);
        } else {
            console.log(`Hotéis disponíveis em ${cidade}:`);
            encontrados.forEach(hotel => {
                console.log(`- ${hotel.nome} (ID: ${hotel.id}), Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
        }
    },
  
    // Método para fazer uma reserva em um hotel
    fazerReserva: function(idHotel, nomeCliente) {
        let hotel = this.hoteis.find(hotel => hotel.id === idHotel);
        if (!hotel) {
            console.log(`Hotel com ID ${idHotel} não encontrado.`);
            return;
        }
        if (hotel.quartosDisponiveis === 0) {
            console.log(`Desculpe, não há quartos disponíveis no hotel ${hotel.nome}.`);
            return;
        }
        let novaReserva = {
            idReserva: this.contadorReserva++,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        };
        this.reservas.push(novaReserva);
        hotel.quartosDisponiveis--;
        console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
    },
  
    // Método para cancelar uma reserva
    cancelarReserva: function(idReserva) {
        let reserva = this.reservas.find(reserva => reserva.idReserva === idReserva);
        if (!reserva) {
            console.log(`Reserva com ID ${idReserva} não encontrada.`);
            return;
        }
        let hotel = this.hoteis.find(hotel => hotel.id === reserva.idHotel);
        if (!hotel) {
            console.log(`Hotel da reserva não encontrado.`);
            return;
        }
        // Remove a reserva e libera o quarto no hotel
        this.reservas = this.reservas.filter(reserva => reserva.idReserva !== idReserva);
        hotel.quartosDisponiveis++;
        console.log(`Reserva ${idReserva} cancelada com sucesso.`);
    },
  
    // Método para listar todas as reservas
    listarReservas: function() {
        console.log(`Lista de Reservas:`);
        this.reservas.forEach(reserva => {
            let hotel = this.hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`- Reserva ${reserva.idReserva}: Cliente ${reserva.nomeCliente} no hotel ${hotel.nome} (${hotel.cidade})`);
        });
    }
};

sistemaReservas.adicionarHotel("Hotel A", "São Paulo", 20);
sistemaReservas.adicionarHotel("Hotel B", "Rio de Janeiro", 15);
sistemaReservas.adicionarHotel("Hotel C", "São Paulo", 30);

sistemaReservas.buscarHoteisPorCidade("São Paulo");

sistemaReservas.fazerReserva(1, "João");
sistemaReservas.fazerReserva(1, "Maria");
sistemaReservas.fazerReserva(2, "José");

sistemaReservas.listarReservas();

sistemaReservas.cancelarReserva(2);

sistemaReservas.listarReservas();
