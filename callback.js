// Callback

// Callback anonimo
// En este caso, la funcion que pasamos como callback no tiene nombre. Es decir,
// es una funcion anonima. Como las funciones anonimas no pueden ser llamadas por su nombre,
// debems escribirla dentro de la funcion que se encargara de llamar al callback.

setTimeout(function () {
    console.log('Hola Mundo!')
}, 10000)
// nos muestra por consola// Hola Mundo! con diez segundos de retraso
//                   -------------------------------------
// El callback definido
// La funcion que pasamos como callback puede ser una funcion previamente definida. 
//Al momento de pasarla como parametro de otra funcion, nos referiremos a la misma por su nombre.

let miCallback = () => console.log('Hola Mundo!');
setTimeout(miCallback, 10000);
// nos muestra por consola// Hola Mundo! con diez segundos de retraso

//Al escribir una funcion como parametro lo hacemos sin los parentesis para evitar que se ejecute. 
//Sera la funcion que la recibe quien se encargue de ejecutarla.
//           -------------------------------------


let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multlipicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2)
console.log(calculadora(18, 3, multlipicar))
// no muestra por consola// 54

