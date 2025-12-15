//Esto habilita el modo estricto
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Con seal sella el objeto solo se pueden modificar las propiedades existentes del objeto
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
delete producto.precio;


console.log(producto);
//Con este codigo podemos ver si un objeto esta congelado

//nota la diferencia entre seal y freeze es que freeze no te deja hacer nada, mientras que seal te deja modificar las llaves existentes de un objeto 