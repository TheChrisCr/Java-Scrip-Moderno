//Unir dos objetos


//1 Objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
//2 Objeto
const medidas = {
    peso:"1kg",
    medida: "1m"
}

console.log(producto)
console.log(medidas)

//El metodo object.assign agrupa dos objetos en uno solo
const resultado = Object.assign(producto,medidas);

//Spread Operatorr o Rest Operator
const resultado2 = { ...producto, ...medidas }

console.log(resultado);
console.log(resultado2);