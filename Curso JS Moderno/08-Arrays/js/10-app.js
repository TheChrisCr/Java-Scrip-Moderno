const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]

const nuevoArreglo = carrito.map( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}` ;
} )

const nuevoArreglo2 = carrito.forEach( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}` ;
} )

console.log(nuevoArreglo)
console.log(nuevoArreglo2)