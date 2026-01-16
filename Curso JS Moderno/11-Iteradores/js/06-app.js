//forEach

const pendiente = [`Tarea`, `Comer`, `Proyecto`, `Estudiar JavaScript`];

// pendiente.forEach((pendiente, indice) =>console.log(pendiente))

pendiente.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]

const nuevoArreglo1 = carrito.forEach(producto => producto.nombre)
const nuevoArreglo2 = carrito.map(producto => producto.nombre)

console.log(nuevoArreglo1)
console.log(nuevoArreglo2)