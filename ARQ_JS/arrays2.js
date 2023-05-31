let pessoa = {
    nome: 'Lucas',
    sobreNome: 'Silva',
    idade: 18,
    hobbies: ['Filmes', 'Esportes', 'Jogar'],
    endereco: {
        rua:"1º de maio",
        bairro: "Mandaqui",
        cep: 6454545,
    }
};

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade e mora no endereço: ${pessoa.endereco.rua}`);
