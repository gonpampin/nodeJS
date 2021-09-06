// ----------JSON----------
// J ava
// s cript
// O bjet
// N otation
//    - - - - - - - - - 
// es un formato de texto sencillo, utilizado para intercambiar datos.

// JSON.parse()  convierte un texto en formato JSON al tipo de dato equibalente de JavaScript
// Recive una cadena de texto formato JSON
// Devuelve el mismo dato que recivio en formato JavaScript

let datosJson = '{"club": "racing", "barrio": "avellaneda"}';
let datosConvertidos = JSON.parse(datosJson);
// console.log(datosConvertidos)
//nos devuelve por consola 
//{ club: 'racing', barrio: 'avellaneda' }


/*JSON.Stringify() convierte un tipo de dato de javascript en un texto en formato json.
recive un tipo de dato de java script
Devuelve una cadena de texto con formato JSON */

let objetoLiteral = {
    nombre: "Carla",
    pais: "Argentina"
};
//let datoConvertidos = JSON.stringify(objetoLiteral);
//console.log(datoConvertidos)
//nos devuelve por consola
// {"nombre":"Carla","pais":"Argentina"}