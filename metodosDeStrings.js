// =======metodosDeStrings=======

function dominio(string) {

    return "http://www." + string;
}

// .length retorna la cantidad de caracteres de un string incluido los espacios

let texto = "hola mundo";
//console.log(texto.length)// nos muestra por consola // 10

// .replace() reemplaza una parte del strin por otra y nis devuelve el nuevo string

// ejercicio
function reemplazoFastFast(a, b, c) {
    return a.replace(b, c)
}

//otro ejemplo

let frase3 = ('Vamos River');
frase3.replace('Vamos', 'Aguante'); // nos muestra por consola// Aguante River

// .indexOf Busca en el string el sring que recibe como parametro. Retorna el primer 
//indece donde encontro lo que buscamos. Si no lo encuentra, retorna un -1

function menciona(texto, palabra) {
    if (texto.indexOf(palabra) > -1) {
        return true

    } else {
        return false
    }

}
//console.log(menciona('nos los representantes', 'los'))// nos muestra por consola//
// true

//          otro ejemplo

let preambulo = "Nos los representanes"
preambulo.indexOf('los') // nos muestra por consola// 4

// .slice() Corta el string y devuelve una parte del string donde se aplica.
//Recibe dos numeros como parametros (si es negativo empieza desde el final) 
//el primer numero indica donde inicia el corte el segundo donde finaliz. 
// Retorna la parte correspondiente al corte. 

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11)
//console.log(licenciada) // nos muestra por consola// Carli

//         otro ejemplo

let fraseDos = 'Breaking Bad Rules!';
//console.log (fraseDos.slice(9,12));//nos muestra por consola// Bad
//console.log (fraseDos.slice(13))// nos muestra por consola// Rules!
//console.log (fraseDos.slice(-10)) // nos muestra por consola// Bad Rules!

// .trim() Elimina los espacios que esten al principio y al final de un string.
// NO recibe parametros.
// No quits los espacios del medio

let nombreCompleto = '   Homero Simpson   ';
//console.log (nombreCompleto.trim());// nos muestra por consola//'Homero Simpson'

let otroNombreCompleto = '    Homero    J.   Simpson    ';
//console.log (otroNombreCompleto.trim());//nos muestra por consola//'Homero    J.   Simpson'

// .split() Divide un string en partes
// Recibe un string que usara como separador de las partes
// Devuelve un array con las partes de string

let cancion = 'And bingo was his nema, oh!';
//console.log(cancion.split(' '));//nos muestra por consola//[ 'And', 'bingo', 'was', 'his', 'nema,', 'oh!' ]
//console.log(cancion.split(', '))//nos muestra por consola //[ 'And bingo was his nema', 'oh!' ]