const input1 = prompt("Digite o primeiro número: ");
const input2 = prompt("Digite o segundo número: "); 
const num2 = Number(input2);
const num1 = Number(input1)

const verificarNumeroMaior = (num1, num2) => {
    num1 > num2 ? console.log("O primeiro número é maior") : console.log("O segundo número é maior");
} 

verificarNumeroMaior(num1,num2); 

