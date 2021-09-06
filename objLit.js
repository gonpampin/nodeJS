//  ========objetosLiterales========
// Un objeto es una estructura de datos que puede contener propiedades y metodos.
// Para crearlos usamos llaves de apertura y de cierre.
// Definimos el nombre de la propiedad del objeto, con los dos puntos 
// separamos la propiedad de su valor, el valor puede ser cualquier dato que conocemos

let perro = {
    nombre: "juan",
    edad: 23,
    vacunado: true,
}

//ejercicio

let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (horas) {
        this.energia = this.energia - horas * 5
        this.experiencia = this.experiencia + horas * 2
    },
}

/*console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);*/
//nos muestra por consola//
/*  ==Antes de comenzar entrenamiento==
    Deportista energia: 100
    Deportista experiencia: 10
    ==ENTRENANDO==
    ==FIN ENTRENAMIENTO==
    Deportista energia: 75
    Deportista experiencia: 20
    */

//  - - - - -Otro ejmplo - - - -
// La palabra reservada this. hace referencia al objeto en si donde
// estamos parados. Es decir, el objeto en si donde escribimos la 
// palabra.

let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    activo: true,
    saludar: function () {
        return 'Hola me llamo ' + this.nombre + ' ' + tenista.apellido + ' ' + 'tengo ' + this.edad
    }
};

/*console.log(tenista.nombre)nos muestra por consola//Roger
console.log(tenista.apellido)nos muestra por consola//Federer
//console.log(tenista.saludar())// nos muestra por consola// Hola me llamo Roger Federer tengo 38*/

// Funciones constructoras
//La funcion constructora nos permite armar un molde 
// y luego crear todos los objetos que necesitemos.
// La funcion recibe un parametro por cada propiedad 
// que queramos asignarle al objeto.

function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

};
let miauto = new Auto('ford', 'falcon')

/*console.log(miauto)// nos muestra por consola
Auto {
    marca: 'ford',
    modelo: 'falcon'
}*/