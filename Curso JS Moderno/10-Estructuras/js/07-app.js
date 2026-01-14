const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// El operador OR || revisa que se cumpla al menos una de las condiciones
//este codigo es muy comun en la validacion de un formulario
if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}
