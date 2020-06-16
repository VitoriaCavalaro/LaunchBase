//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são: Nome, Cor, Foco, Endereço.

const empresa = 
{
    nome: "RocketSeat",
    cor: "Roxo",
    foco: "Programação",
    end: "Rua Guilherme Gembala, 260"
}

console.log(`A empresa ${empresa.nome}, possui seu logo na cor ${empresa.cor} e tem o foco em ${empresa.foco}. Quem quiser conhece-los, basta ir ao endereço ${empresa.end}.`)