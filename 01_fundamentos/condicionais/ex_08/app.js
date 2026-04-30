const input = prompt("Digite um número: ")
const num = Number(input)


const verificarNumero = (num) => {

    if(input == '' | input.includes(" ") | isNaN(num)){
        console.log("Digite um número válido!")
    }else if(num === 0){
        console.log("Você digitou o número 0.")
    }else if(num < 0){
        console.log("Você digitou um número negativo.")
    }else{
        console.log("Você digitou um número positívo.")
    }

}

verificarNumero(num);

