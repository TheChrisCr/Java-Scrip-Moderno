

for ( let i = 0; i <= 10; i++) {
    if ( i === 5) {
        console.log('CINCO');
        //rompe el ciclo
        continue;
    }
    console.log(`Número: ${i}`);
}

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400, descuento: true },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]

for ( let i = 0; i < carrito.length; i++ ) {
    if( carrito[i].descuento ) {
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }
}