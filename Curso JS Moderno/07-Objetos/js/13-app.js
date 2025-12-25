const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//object.keys se utiliza para saber si el objeto tiene o no tiene informacion
console.log(Object.keys( producto ));

//object.value se utiliza para saber si el objecto tiene o no tiene valores
console.log(Object.values( producto));

//object.entries para saber si el objeto tiene valores y informacion retorna los dos datos
console.log(Object.entries(producto));