const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// meses.forEach( (mes, i)=> {
//     console.log(i)
//     console.log(mes)
// } )

// meses.forEach( (mes, i)=> {
//     if(mes === `Abril`) {
//         console.log(`Econtrado en el indice ${i}`)
//     }
// } )

//Encontrar el indice de abril
const indice = meses.findIndex( mes => mes === `Abril`)
console.log(indice)
//Al no encontrar ningun indice con el valor colocado retorna un -1
const indice2 = meses.findIndex( mes => mes === `Diciembre`)
console.log(indice2)

//este codigo sirve como para que deje un mensaje si encuentra el valor 
if (indice > 0) {
    console.log(`Se encontro el indice`)
} else {
    console.log(`No se encontro el indice`)
}
//En este caso daria que el indice no se encontro
if (indice2 > 0) {
    console.log(`Se encontro el indice`)
} else {
    console.log(`No se encontro el indice`)
}

//Encontrar un indice de un arreglo de objetos

const indice3 = carrito.findIndex ( producto => producto.precio === 100);
console.log(indice3)