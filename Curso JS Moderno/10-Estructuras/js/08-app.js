const autenticado = true;

// if (autenticado === true) {
//     console.log('El usuario está autenticado');
// }

//No es necesario comparar con true
// if (autenticado) {
//     console.log('El usuario está autenticado');
// }


// const puntaje = 500;

// if (puntaje > 400) {
//     console.log('Excelente!')
// } else if (puntaje > 300) {
//     console.log('Buen puntaje... felicidades')
// }

const puntaje = 500;
//Solo dentro de una funcion se puede utilizar el if con return
//Si se cumple la primera condición, no se ejecuta el resto del código
function revisarPuntaje() {
    if (puntaje >= 400) {
    console.log('Excelente!')
    return; //Termina la ejecución del código si el puntaje es mayor o igual a 400
    }
    if (puntaje >= 300) {
    console.log('Buen puntaje... felicidades')
    return;} //Termina la ejecución del código si el puntaje es mayor o igual a 300
}

revisarPuntaje();