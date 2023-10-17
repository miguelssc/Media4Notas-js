let nota1, nota2, nota3, nota4, media;
let resultado;
alert("-- Média de quatro notas --");
nota1 =prompt("Digite a nota #1...: ");
nota2= prompt("Digite a nota #2...: ");
nota3= prompt("Digite a nota #3...: ");
nota4= prompt("Digite a nota #4...: ");


 Boolean(  todasAsNotasSaoValidas =  nota1 >= 0 && nota1 <= 10
                            && nota2 >= 0 && nota2 <= 10
                            && nota3 >= 0 && nota3 <= 10
                            && nota4 >= 0 && nota4 <= 10)

if (todasAsNotasSaoValidas)
{
    media = ( Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) )/ 4;

    
    if (media < 5)
    {
        resultado = "Reprovado";    
    }
    else if (media > 6)
    {
        resultado = "Aprovado";
    }
    else
    {
        resultado = "Em recuperação";
    }


    alert(`Você ficou com média ${media}. Resultado: ${resultado}`);
}
else
{
    alert("Digite somente notas entre 0 e 10.");
}