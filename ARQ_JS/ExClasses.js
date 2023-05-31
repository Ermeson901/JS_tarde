class Animal {
    constructor(Especie, Idade, Cor, Raca, Funcao) {
        this.Especie = Especie;
        this.Idade = Idade;
        this.Cor = Cor;
        this.Raca = Raca;
        this.Funcao = Funcao;
    }
};

class Carro {
    constructor(Marca, Modelo, Ano, Cor, Condicao) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ano = Ano;
        this.Cor = Cor;
        this.Condicao = Condicao;
    }
};

let animal1 = new Animal('Cachorro', '8 anos', 'Caramelo', 'SRD', 'Guarda casa');

console.log(`Meu ${animal1.Especie} tem ${animal1.Idade}`);

let carro1 = new Carro('Honda', 'Civic', 2023, 'Branco', 'Novo');
console.log(`Meu carro ${carro1.Modelo} é do ano ${carro1.Ano}`);

