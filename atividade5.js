/*5. Tuck in Array
Crie uma função que receba duas matrizes e insira a segunda matriz no meio da primeira.
Exemplos
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
Notas
• O primeiro array sempre tem dois elementos.
• Use a sintaxe de propagação para resolver esse desafio*/



const array1 =[1,2]

const array2 =['A','B','C']

const removido = array1.splice(1, 1, array2)

console.log(array1, removido)