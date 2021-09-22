/*1. Quanto é verdade?
Crie uma função que retorne o número de true valores que existem em uma matriz.
Exemplos
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
notas
• Retorne 0 se for fornecido um array vazio.
• Todos os itens da matriz são do tipo bool ( trueou false).*/


const array = [true, false, false, true, false,false, true, false]
let contador = 0


function quantosTrue() {    
if (array.length === 0 ){
    contador = 0;
    console.log(contador)
}else {
    for (i=0; [i] <= array.length; i++){
        if(array[i] === true)        
        contador = contador +1            
        }console.log(contador)
    }
}
quantosTrue()