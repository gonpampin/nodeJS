//     =====Condicionales=====

// Son mecanismos de control de flujo, también llamados condicionales, 
// ya que nos permiten evaluar condiciones y realizar diferentes acciones 
// según el resultado de dicha evaluación.

// Es una buena práctica iniciar la variable con el tipo de dato que vamos a almacenar. 
// De esa manera queda más claro para qué se van a utilizar.

let dato = true;
    if (dato == true)
    console.log( "es true");
        else 
        console.log("es false");
// muestra por consola // "es true"

// igualdad, if y else

let lenguaje = "javascript";
    if (lenguaje === "javascript" )
        console.log ( "Estoy aprendiendo" )
    else 
        console.log  ("Lo aprenderé más adelante")
// muestra por consola // "Estoy aprendiendo"

// otro ejemplo

function puedePasar(nombre){
    if (nombre === "Cosme Fulanito" ){
        return true }
    else {return false}
}
//console.log (puedePasar("Cosme Fulanito")) // muestra por consola // true