const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existen en un arreglo

meses.forEach( mes => {
    if (mes === `Enero`) {
        console.log(`El mes de ${mes} si existe`)
    }
})


const resultado1 = meses.includes(`Enero`);
console.log(resultado1);

const resultado2 = meses.includes(`Diciembre`);
console.log(resultado2);

//En un arreglo de objetos .some

const existe = carrito.some( producto => producto.nombre === `Celular` )

console.log(existe);

const existe2 = carrito.some( producto => producto.nombre === `Monitor Curvo` )

console.log(existe2);

//En un arreglo  tradicional con .some
const existe3 = meses.some( mes => mes === `Febrero` );
console.log(existe3)