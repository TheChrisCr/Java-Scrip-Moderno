// const pendientes = [`Tarea`, `Comer`, `Proyecto`, `Estudiar JavaScript`];

// for( let pendiente in pendientes ) {
//     console.log(pendiente);
// }



const automovil1 = {
    modelo: "Camaro",
    year: 1969,
    motor: "6.0"
}

// for ( let propiedad in automovil1 ) {
//     console.log(`${automovil1 [propiedad]}`)
// }

for( let [llave, valor] of Object.entries(automovil1) ) {
    console.log(valor);
    console.log(llave);
}

//itera sobre los valores de un objeto