const nome = 'Fulano'
const altura = 1.70
const peso = 70
const imc = peso / (altura*altura)

if(imc >= 30)
{
    console.log(`${nome}, o seu imc é  ${imc}. Você está acima do peso.`);
}
else
{
    console.log(`${nome}, o seu imc é  ${imc}. Você não está acima do peso.`);
}

