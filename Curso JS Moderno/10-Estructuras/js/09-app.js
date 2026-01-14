// autenticado = true;

// el ? sirve para evaluar una condicion y el : es como un else
// console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

// ejemplo de cuando no se quiere mostrar nada en el else
// autenticado = false;
// console.log(autenticado ? 'Si esta autenticado' : null);

// autenticado = true;
// const puedePagar = true;

// console.log(autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// const autenticado = false;
// const puedePagar = true;

// console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar');

// console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar');

// const autenticado = false;
// const puedePagar = true;

// console.log(autenticado || puedePagar ? 'Si puede pagar' : "No puede pagar");

// const efectivo = 700;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// // si alguna de las condiciones se cumple entra al if
// if( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ) {
//     // si el efectivo es mayor al total a pagar
//     if(efectivo > totalPagar) {
//         console.log('Si pagaste con efectivo');
//     } else {
//         console.log('Otra forma de pago');
//     }
// } else {
//     console.log('Fondos insuficientes');
// }


const autenticado = true;
const puedePagar = false;

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado pero no puede pagar' : 'No esta autenticado' );