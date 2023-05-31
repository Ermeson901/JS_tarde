// let frutas = [
//     ['frutas1', 'frutas2', 'frutas3', 'fruta4'],
//     ['frutas5', 'frutas6', 'frutas7', 'frutas8'],
//     ['frutas9', 'frutas10', 'frutas11', 'frutas12'],
//     ['frutas13', 'frutas14', 'frutas15', 'frutas16'],
// ];

// frutas[2][2] = 'Limão';
// console.log(frutas);
let frutas = ['Limão', 'Mamão', 'MUrango', 'Abacate'];
for (
    let contadorFrutas = 0;
    contadorFrutas < frutas.length;
    contadorFrutas += 1
) {
    console.log(`Nome da fruta: ${frutas[contadorFrutas]}`);
}
