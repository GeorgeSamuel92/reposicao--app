

export default class Cliente {

    constructor(pNome, pDataNasc, pCpf) {
        this.nome = pNome;
        this.data_nasc = pDataNasc;
        this.cpf = pCpf
        this.data_cad = new Date();
    }

    get Nome() { return this.nome; }
    set Nome(value) { this.nome = value }

    get Data_nasc() { return this.data_nasc; }
    set Data_nasc(value) {
        this.data_nasc = value;
    }

    get Cpf() { return this.cpf; }
    set Cpf(value) { this.cpf = value }

    get Data_cad() { return this.data_cad; }
    set Data_cad(value) { this.data_cad = value }

    toString() {
        return `Nome: ${this.nome}, Data de Nascimento: ${this.data_nasc}, Cpf: ${this.cpf}, Data de Cadastro: ${this.data_cad}`;
    }
    
}

