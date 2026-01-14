const usuario = false;
const puedePagar = false;


//El orden de los else if son importante porque se van evaluando de arriba hacia abajo
if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usuario) {
    console.log('No puedes comprar');
} else if (!usuario) {
    console.log('inicia sesion o saca una cuenta');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
}