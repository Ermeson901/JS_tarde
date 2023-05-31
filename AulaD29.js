

let doc1 = document.querySelector('#p1');

let mudarC = () => {
    doc1.style.color = 'red';
};
let mudarT = () => {
    doc1.innerHTML = 'Textinho';
};
let mudarV = () => {
    doc1.innerHTML = 'Método addEventListener';
    doc1.style.color = 'black';
};
//Operador 
doc1.addEventListener('click', mudarT);
doc1.addEventListener('mouseenter', mudarC);
doc1.addEventListener('mouseout', mudarV);
