// otro Array

let frutas = ["Manzana", "Banana", "Naranja"]


// .length nos da la cantidad de elemtos dentro de un array

//console.log(frutas.length)// 3


// Acceder a un elemento de Array mediante su índice

let primero = frutas[0] // Manzana

let ultimo = frutas[frutas.length - 1] // Naranja


// .indexOf() nos da el indice del elemento

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];
let indiceJuan = alumnos.indexOf("Juan");

//console.log(indiceJuan);// 0

let indiceFrancisco = alumnos.indexOf("Francisco");

//console.log(indiceFrancisco);// 3


// .join() nos devuelve un string de los elementos??

let arrayFrase = ["No", "he", "fracasado,", "simplemente", "me", "he", "topado", "con",
  "diez", "mil", "soluciones", "equivocadas"
];
let fraseNueva = arrayFrase.join(" ")
// console.log (fraseNueva)// no muestra por consola// 
//No he fracasado, simplemente me he topado con diez mil soluciones equivocadas


// .pop() elimina el ultimo elemto del array y nos devuelve el mismo

let estudiantes = [{
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
  }
];
let alumnoEgresado = estudiantes.pop()

//console.log (alumnoEgresado)// no muestra por consola//
// { nombre: 'Alexis', promedio: 3, curso: 'iOS' }

//console.log(estudiantes)// no muestra por consola//
//[ 
// { nombre: 'Alvaro', promedio: 9, curso: 'Android' },
// { nombre: 'Daniel', promedio: 6, curso: 'Full Stack' }
//]


// .push() agrega un elemnto al final del array.

let estudiantes = [{
    nombre: 'Alvaro',
    promedio: 9,
    curso: 'Android',
  },
  {
    nombre: 'Daniel',
    promedio: 6,
    curso: 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio: 3,
    curso: 'iOS',
  },
];
estudiantes.push({
  nombre: "Juan",
  promedio: 5,
  curso: "iOS"
});
estudiantes.push({
  nombre: "Miguel",
  promedio: 2,
  curso: "Android"
});
//console.log(estudiantes)// no muestra por consola//
/*
[
  { nombre: 'Alvaro', promedio: 9, curso: 'Android' },
  { nombre: 'Daniel', promedio: 6, curso: 'Full Stack' },
  { nombre: 'Alexis', promedio: 3, curso: 'iOS' },
  { nombre: 'Juan', promedio: 5, curso: 'iOS' },
  { nombre: 'Miguel', promedio: 2, curso: 'Android' }
]
*/

// .shift() elimina el primer elemto de un array y devuelve el elmento eliminado.

let estudiantes = [{
    nombre: 'Alvaro',
    promedio: 9,
    curso: 'Android',
  },
  {
    nombre: 'Daniel',
    promedio: 6,
    curso: 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio: 3,
    curso: 'iOS',
  },
];
let alumnoDeBaja = estudiantes.shift();
// console.log(alumnoDeBaja)// no muestra por consola//
// { nombre: 'Alvaro', promedio: 9, curso: 'Android' }

// console.log(estudiantes)// no muestra por consola//
// [
//  { nombre: 'Daniel', promedio: 6, curso: 'Full Stack' },
//  { nombre: 'Alexis', promedio: 3, curso: 'iOS' }
// ]

// .unshift() Agrega uno o mas elementos al principio de un array, nos devuelve
// la nueva cantidad de elemntos que contiene el array 

let estudiantes = [{
    nombre: 'Alvaro',
    promedio: 9,
    curso: 'Android',
  },
  {
    nombre: 'Daniel',
    promedio: 6,
    curso: 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio: 3,
    curso: 'iOS',
  }
]
estudiantes.unshift({
  nombre: "Mariana",
  promedio: 9,
  curso: "Full Stack"
})
estudiantes.unshift({
  nombre: "Francisco",
  promedio: 2,
  curso: "Android"
}) // nos muestra por consola // 5