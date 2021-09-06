
//=============Funciones==============
/**
Una función es un bloque de código que definimosuna sola vez y que podemos ejecutar todas 
las veces que necesitemos. Si bien puede realizar una o varias tareas específicas, 
es importante tener en cuenta que SIEMPRE retornará un solo valor.
                            - -- -- -
Las funciones en JavaScript nos permiten agrupar uno o varios bloques de código, que 
estamos seguros que vamos a reutilizar muchas veces.

Es importante diferenciar claramente dos momentos:

*El momento de definir lo que hará la función.

*El momento de ejecución de la función.

En el primer momento se da el armado de la función y de toda su lógica interna. Es decir,
 es donde definimos qué queremos que haga.

Mientras que el segundo momento hace referencia a cuando se usa la función. Es decir,
 es el instante justo donde necesitamos ponerla en marcha.
 */

    //Declarar funciones

 function ejemplo(){
    return  "hola, soy una función";
    }

    // Declarando funciones en variables

let ejemplo = function(){
    return "hola, soy una función expresada";
    }

    //Funciones con parámetros

    function saludar(nombre, apellido) {
        return 'Hola, ' + nombre + ' ' + apellido + '!';
    }
    // console.log(saludar('Juan', 'Perez')) // muestra por consola // 'Hola, Juan Perez!'

    //Números pares

    function esPar(n){
        if (n % 2 == 0) //if (n % 2 !== 0)// para impar
          return true;
             else return false; // lo preobe con y sin las llaves, las dos funcinan. 
         // else {return false};
       }
      // console.log(esPar(8))// muestra por consola // true

      function esMultiploDeCinco(n){
          if (n % 5 == 0)
          return true;
          else return false;
      }
     // console.log(esMultiploDeCinco(95))//  muestra por consola // true

      // Declarando tres funciones
      // ¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? 
      // Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables 
      // (estructuras que contienen información) podemos declarar funciones 
      // (estructuras que procesan información).

      function anterior(n){
        return n - 1;
        }
        function triple(n){
            return n * 3;
        }
        function anteriorDelTriple(n){
           return anterior(triple(n));
        }

        
        
