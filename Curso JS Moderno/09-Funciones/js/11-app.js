const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo("JavaScript","CSS")

//cuando es solo un parametro no hace falta los ()
const aprendiendo2 = tecnology => `Aprendiendo ${tecnology}`;
console.log(aprendiendo2("JavaScript"));
//cuando son mas de dos parametros se necesita colocar los ()
const aprendiendo3 = (tecnology, tecnology2) => `Aprendiendo ${tecnology} y ${tecnology2}`;
console.log(aprendiendo3("JavaScript", "CSS" ));