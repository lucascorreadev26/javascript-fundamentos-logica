const input1 = prompt("Digite o primeiro número: "); 
const input2 = prompt("Digite o segundo número: "); 
const input3 = prompt("Digite o terceiro número: "); 
const num1 = Number(input1) 
const num2 = Number(input2); 
const num3 = Number(input3); 


   // primeiro código construido sem pesquisar sobre esse algoritmo
/*const verificarNumeroMaior = (num1, num2, num3) => { 
    if(num1 > num2){ 
        if(num1 > num3){ 
            console.log(`O número maior é o primeiro: ${num1}`) 
        }else{
            console.log(`O número maior é o terceiro: ${num3}`) 
        }
    }else if(num2 > num3){ 
        console.log(`O número maior é o segundo: ${num2}`) 
    }else{ 
        console.log(`O número maior é o terceiro: ${num3}`) 
    }
}*/
        

//  segundo código construído após pesquisar sobre esse algoritmo
const verificarNumeroMaior = (num1, num2, num3) => {

    let maior; 

    // 1 - validacao entre 2 numeros
    if(num1 > num2){
        maior = num1;
    }else{
        maior = num2;
    }


    // 2 - validacao entre o numero 'maior' e o num3
    if(num3 > maior){
        maior = num3;
    }

    console.log("O número maior é: " + maior);
}
         
verificarNumeroMaior(num1, num2, num3);





