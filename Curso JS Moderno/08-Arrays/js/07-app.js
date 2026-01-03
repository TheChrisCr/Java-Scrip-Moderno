const carrito = [];

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto4 = {
    nombre: "Celular 2",
    precio: 100
}

//esta es una forma imperativa
//.push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3);
console.table(carrito);


// //eliminar ultimo elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// //eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito)


//cortar en un arreglo especificamente
carrito.splice(1,2)
console.table(carrito);