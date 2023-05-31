var nome = 'Kauê'; 
var idade = "15";
var nota01 = 10;
var nota02 = 6;
var media = (nota01 + nota02) / 2 //Criar uma variável que armazene o valor da média do aluno.
var resultado = media >= 8 // Mostrar através de um template string se o aluno foi ou não aprovado (Valor booleano).

console.log(`A média do aluno ${nome} é ${media} e o mesmo está aprovado?: ${resultado} `)

console.log(`O Aluno ${nome} tem a média: ${media} \n E o ${nome} tem ${idade} anos de idade.`);

var nomeCurso = "Desenvolvimento Web"
//Criar uma template string que concatene o nome e curso do aluno em uma frase.
//Utilizar em uma string no console dois cárteres de escape.  

console.log(`O ${nome} está no curso de: ${nomeCurso}\n O jovem está com a média ${media}`)


//var nNum = 'five' * 5;
//console.log(typeof idade);
// typeof tipo do valor da variavel (Number/string/Boolean);