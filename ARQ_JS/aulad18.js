//  EX1
let ex1 = [1, 2, 3, 4, 5];
let exUm = ex1.map((number) => number * 2);
console.log(exUm);
console.log(`----------------------------`);

// EX2
let ex2 = [1, 2, 3, 4, 5];
let exDois = ex2.filter((number) => number % 2 == 0);
console.log(exDois);
console.log(`----------------------------`);

// EX3
let fruta = ['maça', 'banana', 'laranja', 'kiwi'];
fruta.forEach((frutas) => {
    console.log(`Eu gosto de: ${frutas}`);
});
console.log(`----------------------------`);
let alunos = [
    { nome: 'Nathalia', idade: 28 },
    { nome: 'Gustavo', idade: 22 },
    { nome: 'Kauê', idade: 15 },
];
alunos.forEach((aluno) => {
    console.log(`Aluno: ${aluno.nome}, idade: ${aluno.idade}`);
})
console.log(`----------------------------`);

let alunos2 = [
    { nome: 'Nathalia', idade: 28 },
    { nome: 'Gustavo', idade: 22 },
    { nome: 'Kauê', idade: 15 },
];
let estu=alunos.map((st) =>{
    console.log(`Alunos: ${st.nome}`)
})
console.log(estu)