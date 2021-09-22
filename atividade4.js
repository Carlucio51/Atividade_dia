/*4. Encontre os menores e maiores números
Crie uma função que pegue uma matriz de números e retorne os números mínimo e 
máximo, nessa ordem.
Exemplos
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
Notas
Todas as matrizes de teste terão pelo menos um elemento e são válidas*/

const array = [1,5,3,4,2,100]

const ordenado = array.sort((a,b) => {
    if ( a < b) return -1;
    if (b < a) return 1;
    return 0;
});
console.table(ordenado)









/*const numeros = [16,19,100,254,300,1,22,24,53,35]

const ordenado = numeros.sort((a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
console.table(ordenado)*/