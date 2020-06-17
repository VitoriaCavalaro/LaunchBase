//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários

const usuarios = 
[
    {
        nome: "Vitória",
        tecnologias: ["HTML", "CSS"]
    },

    {
        nome: "Matheus",
        tecnologias: ["JavaScript", "CSS"]
    },

    {
        nome: "Mariana",
        tecnologias: ["Pyhon", "C++"]
    }
]

for (let usuario of usuarios) // of armazena na variavel cada item da lista e responde na mesma quantidade
{
    console.log(`${usuario.nome}, trabalha com ${usuario.tecnologias}.`)
}

//segunda parte do desafio: Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
//Essa função deve retornar um boolean true/false.


