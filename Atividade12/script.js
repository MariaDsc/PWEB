//atv 1
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    }
}

const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));


const ret1 = new Retangulo(base, altura);

const area = ret1.calcularArea();
alert("A área do retângulo é: " + area);


//atv 2
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    get banco() {
        return this._banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    set banco(b) {
        this._banco = b;
    }

    set numeroConta(n) {
        this._numeroConta = n;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}


class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}


class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, dtVencimento) {
        super(nome, banco, numeroConta, saldo);
        this._juros = juros;
        this._dtVencimento = dtVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(j) {
        this._juros = j;
    }

    get dtVencimento() {
        return this._dtVencimento;
    }

    set dtVencimento(data) {
        this._dtVencimento = data;
    }
}


function criarConta() {
    const nome = document.getElementById("nome").value;
    const banco = document.getElementById("banco").value;
    const numero = document.getElementById("numero").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    //pego os elementos dos radiobuttons e armazena como lista
    const radios = document.getElementsByName("tipo");

    let tipo;

    //como é uma lista, ele vê quantos elementos tem e vê qual está selecionado
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tipo = radios[i].value;
            break;
        }
    }

    let conta;

    if (tipo === "corrente") {

        conta = new Corrente(nome, banco, numero, saldo, 1000);

        alert(
            "Conta criada!\n\n" +
            "Nome: " + conta.nomeCorrentista + "\n" +
            "Banco: " + conta.banco + "\n" +
            "Número: " + conta.numeroConta + "\n" +
            "Saldo: " + conta.saldo + "\n" +
            "Saldo Especial: " + conta.saldoEspecial
        );

    } else {

        conta = new Poupanca(nome, banco, numero, saldo, 0.05, "06/05/2030");

        alert(
            "Conta criada!\n\n" +
            "Nome: " + conta.nomeCorrentista + "\n" +
            "Banco: " + conta.banco + "\n" +
            "Número: " + conta.numeroConta + "\n" +
            "Saldo: " + conta.saldo + "\n" +
            "Juros: " + conta.juros*100 + "%" + "\n" +
            "Data Vencimento: " + conta.dtVencimento
        );
    }
}

function limpar() {
    // limpa os inputs do retângulo
    document.getElementById("nome").value = "";
    document.getElementById("banco").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("saldo").value = "";
}