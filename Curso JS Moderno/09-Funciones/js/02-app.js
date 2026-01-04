// A esto se le conoce como HOISTING, ya que hace dos pasadas la primera para analizar el codigo y en la segunda es ejecutada 


sumar();
function sumar() {
    console.log( 2 + 2 );
}

sumar2();
const sumar2 = function() {
    console.log( 3 + 3);
}