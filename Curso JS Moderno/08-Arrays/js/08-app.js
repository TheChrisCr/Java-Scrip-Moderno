const producto = {
    nombre:"monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring en objetos
const { nombre } = producto;

console.log(nombre);


//Destructuring en arreglos

// //Se definen las variables
const numeros = [10, 20, 30, 40, 50];
// //Se crean nombres para las variables segun su orden
// const [primero, segundo, tercero ] = numeros;
// //Se imprime en consola segundo el nombre que se creo para cada
// console.log(primero);
// console.log(tercero);

//para extraer solo un dato se utilizan , para marcar las variables que no vamos a utilizar con un valor a nada y luego se le agrega un nombre a la variable que si vamos a utilizar para llamarla en el console.log
// const [ , , tercero ] = numeros;

//Se llama a la variable
// console.log(tercero);

// const [ primero, segundo, ...tercero ] = numeros;

// console.log(tercero)

const [ primero, segundo, ...tercero ] = numeros;

console.log(tercero)

