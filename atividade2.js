/* 2. Turno à direita por divisão

A operação de mudança à direita é semelhante à divisão do piso por potências de dois.
Cálculo de amostra usando o operador de deslocamento para a direita (>>):
80 >> 3 = floor(80/2^3) = floor(80/8) = 10-24 >> 2 = floor(-24/2^2) = floor(-
24/4) = -6-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Escreva uma função que imite (sem o uso de >>) o operador de deslocamento à direita e 
retorne o resultado dos dois inteiros fornecidos.
Exemplos
shiftToRight(80, 3) ➞ 10
shiftToRight(-24, 2) ➞ -6
shiftToRight(-5, 1) ➞ -3
shiftToRight(4666, 6) ➞ 72
shiftToRight(3777, 6) ➞ 59
shiftToRight(-512, 10) ➞ -1
Notas
• Não haverá valores negativos para o segundo parâmetro y.
• Este desafio é mais como recriar a operação do turno certo, portanto, o uso do 
operador diretamente é proibido.
• Como alternativa, você pode resolver esse desafio por meio de recursão.*/

function countDown(deNumero){
    console.log(deNumero);
    
    let proximoNumero = deNumero -1
    
    if (proximoNumero >0){
        countDown(proximoNumero)
    
    }
}

countDown(3)

/*
function resolveExpo(n1,n2){
    const resultado = Math.pow(n1,n2)
    console.log(resultado)
}
resolveExpo(80,3);
*/

 