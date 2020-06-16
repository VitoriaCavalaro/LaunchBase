// programa para calcular a aposentadoria. Calculo simples e ficticio
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
const nome = 'Vitoria'
const sexo = 'F'
const idade = 65
const contribuicao = 30

const contacontribuicao = idade + contribuicao

const podeaposentarhomem = sexo == 'M' && contribuicao >= 35 && contacontribuicao >= 95
const podeaposentarmulher = sexo == 'F' && contribuicao >= 30 && contacontribuicao >=85

if(podeaposentarhomem || podeaposentarmulher)
{
    console.log(`${nome}, você já pode se aposentar!`)
} 
else
{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
