// ---------IF ternario-----------
// El if ternario se escribe de forma horizontal, al 
// igual que el if tradicional, tiene el mismo flujo,
// si esta condicion es verdedadera hacer esto, sino, hacer 
// lo otro, pero no hace falta escrbir la palabra if ni else.

//condicion ? primera exprecion : segunda exprecion
// Si es verdadera ejecuta la primera si es falsa la segunda.

let ternario = 4 > 10 ? 'El 4 es mas grande' : 'El 10 es mas grande'
//console.log(ternario)// nos muestra por consola // El 10 es mas grande

let fruta = 'Manzana';
let resultado = fruta == 'Manzana' ? 'Buenisimo me gustan las manzanas' : 'Ufa, queria manzanas'
//console.log(resultado)// nos muestra por consola // Buenisimo me gustan las manzanas 

//otro ejemplo 

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la " + bicicletaConRodadoGrande.marca);
// nos muestra por consola //La bicicleta con  mayor rodado es la Aurora

 //       -------------------------

// ----------switch-------------
//El switch(){} esta compuesto por una expresion a evaluar, 
//seguida de diferentes casos, tantos como queramos, 
//cada uno contemplando un escenario difereente.
//Los casos deberan terminar con la palbra reservada "break" 
//para evitar que se ejecute el proximo bloque.

let dia = 'Domingo';
switch (dia) {
    case 'Lunes':
        console.log('Es Lunes se labura');
        break;
    case 'Sabado':
        console.log('Es Sabado se sale');
        break;
    case 'Domingo':
        console.log('Es Domingo se come asado');
        break;
    default:
        console.log('No es Lunes ni sabado ni Domingo');
        break;
}
// nos muestra por consola // Es Domingo se come asado

//otro ejemplo

let semaforo = 'Verde';
switch (semaforo) {
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Tene precaucion');
        break;
    case 'Rojo':
        console.log('No cruces, tenes que esperar');
        break
    default:
        console.log('No funciona el semaforo');
        break;
}
// nos muestra por consola //Puedo cruzar

//otro ejemplo mas

function tengoClases(dia) {
    switch (dia) {
        case (dia = 'lunes'):
        case (dia = 'miércoles'):
        case (dia = 'viernes'):
            console.log('tenés clases');
            break;
        default:
            console.log('no tenés clases');
            break;
    }
}
console.log(tengoClases('lunes'));
