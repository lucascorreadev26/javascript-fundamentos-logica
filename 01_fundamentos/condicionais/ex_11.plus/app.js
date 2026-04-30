const input = prompt("Digite o primeiro número: "); 
const nota = Number(input) 


const verificarNota = (nota) => {

    //valindando
    if(input === '' || input.includes(" ") || isNaN(nota) || nota < 0 || nota > 10){
        return console.log("Digite uma nota válida!");
    }

    //regra de négocio
    if(nota < 7){
        console.log("Chorou... você foi reprovado!");
    }else if(nota === 7){
        console.log("Eitaaa... você foi aprovado por pouco!");
    }else if(nota === 10){
        console.log("Uauuuuuu! Meus parabéns, você tirou nota máxima =D");
    }else{
        console.log("Sorriu... você foi aprovado")
    }

}

verificarNota(nota); 


