function sumar(a, b ) {
    return a + b ;
}

const resultado = sumar(2,3);

const resultado2 = (resultado + 2)
console.log(resultado);
console.log(resultado2)

//Ejemplo mas avanzado

let total = 0; 

function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log( `El total a pagar es de ${totalPagar}`);

console.log(total);