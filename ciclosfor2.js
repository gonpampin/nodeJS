//Ciclos for(inicio, condicion, modificador){} 

for (let i = 1; i <= 10; i++) {
   // console.log(i * 7)
}
// nos muestra por consola 
//7 14 21 28 35 42 49 56 63 70

function noParesDeContarImparesHasta(numero){
    let suma = 0;
  for (let i = 0; i <= numero; i ++){
  if (i %2 == 1){
  suma = suma + 1;
  }}
  return suma;
  }
 // console.log(noParesDeContarImparesHasta(12))// nos muestra por consola // 6