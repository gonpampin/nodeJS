//-------- Arrow Fuction -------
// Comparemos la estructura de las dos formas de funciones.

//Tradicional

function sumar(n1, n2) {
    return n1 + n2
}

// Arrow Fuction
// Como ya vimos, si la funcion tiene una sola line y la misma 
// es la que hay que retornar, no hace falta el return

let sumar1 = (n1, n2) => n1 + n2

// De lo contrario tenemos que usar las {} y la palabra return

let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0;
}
//console.log(esMultiplo(8, 2))// no muestra por consola // true

// Otros ejemplos

let saludo = () => 'Hola Mundo!';
//console.log(saludo())// no muestra por consola //Hola Mundo!

let dobleDe = numero => numero * 2;
//console.log(dobleDe(15))// no muestra por consola //30

let suma2 = (a, b) => a + b;
//console.log(suma2(3,4))// no muestra por consola //7

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' +
        fecha.getMinutes();
}
//console.log(horaActual())// no muestra por consola //21:2