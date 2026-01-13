const dinero = 100;
const totalPagar = 500;
const tarjeta = true;
const cheque = false;

if(dinero >= totalPagar){
    console.log("Puedes pagar");
} else if(cheque){
    console.log("Puedes pagar, porque tienes cheque");  
} else if(tarjeta){
    console.log("Puedes pagar, porque tienes tarjeta");
} else {
    console.log("Fondos insuficientes");
}