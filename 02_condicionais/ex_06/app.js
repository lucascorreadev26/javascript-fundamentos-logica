const input = prompt("Digite um número: "); 
const num = Number(input);

if ( input === '' || isNaN(num) || input.includes(" ")){
    console.log("Digite um número válido!")
}else if( num % 2 == 0 ){
    console.log("Você digitou um número Par!");
}else{
    console.log("Você digitou um número Ímpar!");
}