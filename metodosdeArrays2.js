// Metodos de arrays

// .map() Este metodo recibe una funcion como parametro (callback).
// Recorre el array y devuelve un nuevo array modificado.
// La modificaciones seran aquellas que programamos en nuestra funcion de callback.

let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function (numero) {
    return numero * 10;
})
console.log(notasHastaEl100);
// nos muestra por consola//  [100, 40, 50, 80, 90, 20, 70]

// otro ejemplo

let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(atraso => atraso - 1)
console.log(horariosAtrasados) // nos muestra por consola// [ 11, 13, 17, 20 ]

//.filter() Este metodo recibe una funcion como parametro (callback).
// Recorre el array y filtra los lelementos que contiene unicamente 
//los elementos que hayab cumplido con esa condicion. Es decir,
// que nuestro nuevo array puede contener menos elementos que el original.

let notasAprobadas = notas.filter(function (numero) {
    return numero > 7;
})
console.log(notasAprobadas)
// nos muestra por consola// [ 10, 8, 9 ]

// otro ejemplo

let estudiantes = [{
        nombre: 'John',
        promedio: 8.5,
        aprobado: true
    },
    {
        nombre: 'Jane',
        promedio: 7,
        aprobado: true
    },
    {
        nombre: 'June',
        promedio: 3,
        aprobado: false
    },
]
let aprobados = estudiantes.filter(diploma => diploma.aprobado == true)
console.log(aprobados) //  // [ { nombre: 'John', promedio: 8.5, aprobado: true }, { nombre: 'Jane', promedio: 7, aprobado: true }]
let desaprobados = estudiantes.filter(mail => mail.aprobado == false)
console.log(desaprobados) //  //[ { nombre: 'June', promedio: 3, aprobado: false } ]

//.reduce()Este metodo recorre el array y devuelve un unico valor.
// Recibe un callback que se va a ejecutar sobre cada elemento del array.
// Este a su vez, recibe dos parametros: un acumulador y el elmento actual que este recorriendo.

let sumaNotas = notas.reduce(function (estado, numero) {
    return estado + numero;
})
console.log(sumaNotas)
// nos muestra por consola// 45

// otro ejemplo 

let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function (acum, num) {
    return acum + num
})
console.log(totalVueltas) // nos muestra por consola// 50

// .forEach() La finalidad de este metodo es iterar sobre un array.
//Recibe un callback como parametro pero no retorna nada.

notas.forEach(function (valor, indice) {
    // console.log(indice);// nos muestra por consola// 0 1 2 3 4 5 6 
    //console.log(valor);// nos muestra por consola// 10 4 5 8 9 2 7 
    console.log('En la posicion ' + indice + ' tengo el valor ' + valor)
})
/*
   En la posicion 0 tengo el valor 10
   En la posicion 1 tengo el valor 4
   En la posicion 2 tengo el valor 5
   En la posicion 3 tengo el valor 8
   En la posicion 4 tengo el valor 9
   En la posicion 5 tengo el valor 2
   En la posicion 6 tengo el valor 7
   */

// otro ejemplo

let listaDeSuperMercado = [
    'Bife de chorizo',
    'Coca Cola',
    'Bananas',
    'Lechuga',
    'Chimichurri',
    'Lata de tomates',
    'Arvejas',
    'Cereales',
    'Pechuga de pollo',
    'Leche'
];
listaDeSuperMercado.forEach(function (lista) {
    console.log(lista)
})
// nos muestra por consola//
/*
Bife de chorizo
Coca Cola
Bananas
Lechuga
Chimichurri
Lata de tomates
Arvejas
Cereales
Pechuga de pollo
Leche
*/