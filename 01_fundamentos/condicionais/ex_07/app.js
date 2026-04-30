const input = prompt("Digite sua idade: ")
const idade = Number(input);


const verificarIdade = (idade) => {

    if(input === '' | input.includes(" ") | isNaN(idade) | idade <= 0){
        console.log("Digite uma idade válida!")
    }else if(idade < 18){
        console.log("Você é menor de idade");
    }else{
        console.log("Você é maior de idade");
    }

}

verificarIdade(idade);