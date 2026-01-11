const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tarjeta Video RTX", precio: 800 },
    { nombre: "Airpods Pro", precio: 400 },
    { nombre: "Wacht GT3", precio: 300 },
    { nombre: "Tablet lenovo", precio: 100 },
]


    const nuevoArreglo1 = carrito.map( (producto) => `${producto.nombre} - Precio: ${producto.precio}` )
    carrito.forEach( (producto) => `${producto.nombre} - Precio: ${producto.precio}` );


    console.log(nuevoArreglo1);
    