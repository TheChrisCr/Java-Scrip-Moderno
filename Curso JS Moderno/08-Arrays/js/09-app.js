const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]




// for (let i = 0; i < carrito.length; i++ ) {
//     console.log( carrito[i].nombre );
// }
for (let i = 0; i < carrito.length; i++ ) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}

//metodo .forEach
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}` );
})