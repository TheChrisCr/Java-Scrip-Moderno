const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]

   //metodo .forEach no crea un nuevo arreglo
    const nuevoArreglo = carrito.forEach( function(producto) {
        return `${producto.nombre} - Precio: ${producto.precio}` ;
    })

    //metodo .map crea un nuevo arreglo
    const nuevoArreglo2 = carrito.map( function(producto) {
        return `${producto.nombre} - Precio: ${producto.precio}` ;
    })