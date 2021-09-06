// Obejeto Date

let fechaActual = new Date();


console.log(fechaActual.toUTCString())// nos muestra por consola //Thu, 02 Sep 2021 20:43:11 GMT
console.log(fechaActual.getYear())// nos muestra por consola // 121 // se refiere a la diferencia entre 1900 y este anio
console.log(fechaActual.getFullYear())// nos muestra por consola // 2021
console.log(fechaActual.getMonth())// nos muestra por consola // 8 // se refiere a la ubicacion del mes septiembre en el array de meses ya que Enero es el [0]
console.log(fechaActual.getDay())// nos muestra por consola // 4 // se refiere a la ubicacion del dia viernes en el array de dias ya que domingo es el [0]
console.log(fechaActual.getDate())// nos muestra por consola // 2

let anio = fechaActual.getUTCFullYear();
let mes = fechaActual.getUTCMonth();
let dia = fechaActual.getDate();
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log('Hoy es el ' + dia + ' del ' + (mes + 1) + ' de ' + anio)// nos muestra por consola // Hoy es el 2 del 9 de 2021
console.log('Hoy es el ' + dia + ' de ' + meses[mes] + ' de ' + anio)// nos muestra por consola // Hoy es el 2 de Septiembre de 2021

// Atener en cuenta: hice este ejercicio el dia viernes dos de septiembre de 2021