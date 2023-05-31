// Pessoa! 
// let pessoa = {
//     nome: 'nicolly',
//     sobrenome: 'jesus',
//     idade: 19,
//     endereco: 'cachoerinha',
// }
// console.log(typeof pessoa)
// console.log(`a ${pessoa.nome} tem ${pessoa.idade}`)
class PessoaFisica { 
    constructor (Nome,SobreNome,Idade,Endereco) { 
        this.Nome = Nome;
        this.SobreNome = SobreNome; 
        this.Idade = Idade;
        this.Endereco = Endereco;
    }
}

let Nicolly = new PessoaFisica('Nicolly','Jesus',19,'Endereco')
console.log(typeof Nicolly)
console.log(`Olá, ${Nicolly.Nome} voce tem ${Nicolly.Idade} anos de idade`)