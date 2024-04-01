const readline = require('readline-sync');

class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    listarClientes() {
        return this.items.map(cliente => cliente.nome);
    }
}

const filaClientes = new Queue();

function adicionarCliente() {
    const nomeCliente = readline.question('Digite o nome do cliente: ');
    const cliente = new Cliente(nomeCliente);
    filaClientes.enqueue(cliente);
    console.log('\nCliente adicionado à fila.');
}

function listarClientes() {
    const clientes = filaClientes.listarClientes();
    console.log('\nClientes na fila: ');
    clientes.forEach(cliente => console.log(cliente));
}

function chamarCliente() {
    const clienteChamado = filaClientes.dequeue();
    if (clienteChamado) {
        console.log(`Cliente ${clienteChamado.nome} chamado da fila.`);
    } else {
        console.log('\nFila está vazia.');
    }
}

function menu() {
    while (true) {
        console.log('************************')
        const opcao = parseInt(readline.question('Menu:\n1: Adicionar Cliente\n2: Listar Clientes\n3: Chamar Cliente\n0: Sair\nDigite o numero desejado da operacao: '));

        switch (opcao) {
            case 0:
                console.log('Programa finalizado.');
                process.exit();
                return;
            case 1:
                adicionarCliente();
                break;
            case 2:
                listarClientes();
                break;
            case 3:
                chamarCliente();
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

menu();