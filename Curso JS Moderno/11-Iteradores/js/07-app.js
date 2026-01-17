const pendientes = [`Tarea`, `Comer`, `Proyecto`, `Estudiar JavaScript`];

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]


for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for ( let producto of carrito ) {
    console.log(producto.nombre)
}