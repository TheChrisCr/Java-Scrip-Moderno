const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto','Septiembre'];

const meses3 = ['Octubre','Noviembre', 'Diciembre'];


// .concat
const resultado = meses.concat(meses2,meses3, 'Otro Mes');

console.log(resultado);

//spread operator, si escribimos el codigo como ...Otro Mes lo que va hacer es crear un elemento por cada letra que tenga el string dentro del arreglo, hay que asegurar que sea un arreglo o si se quiere agregar un elemento
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro Mes']

console.log(resultado2)