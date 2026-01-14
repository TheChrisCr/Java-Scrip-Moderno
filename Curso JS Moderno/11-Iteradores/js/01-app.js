// for ( let i = 0; i <= 200; i++ ) {
//     console.log(`Número: ${i}`);
// }

// for(let i = 1; i <= 20; i++) {
//     if( i % 2 === 0 ) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]

console.log( carrito.length );

for (let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}