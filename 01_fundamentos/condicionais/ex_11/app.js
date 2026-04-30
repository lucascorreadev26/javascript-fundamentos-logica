const input1 = prompt("Digite o primeiro número: "); 
const nota = Number(input1) 


const verificarNota = (nota) => {

    if(nota < 7){
        console.log("Chorou... você foi reprovado!");
    }else{
        console.log("Sorriu... você foi aprovado!");
    }

}

verificarNota(nota); 


