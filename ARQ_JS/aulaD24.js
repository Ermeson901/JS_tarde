// Criar uma função onde eu irei calcular a média do aluno!

//mediaAluno

const mediaAluno = () => {
    // Coletando informação do nosso input
    let nt01 = document.getElementById('nota01');
    let nt02 = document.getElementById('nota02');
    let resultado = document.getElementById('resultado');
    // Convertendo o valor para número
    let notaNum01 = Number(nt01.value);
    let notaNum02 = Number(nt02.value);
    //Criando o calculo para nossa media.
    let media = (notaNum01 + notaNum02) / 2;
    // Trocando o valor do meu HTML pelo resultado.
    resultado.innerHTML = `Sua média é: ${media}`;
};
