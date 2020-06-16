//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza

const programadores = 
[
    {
        nome: "Carlos",
        idade: "32",
        especialidade: "Desktop",
        tecnologia: "C++"

    },
    {
        nome: "Vitória",
        idade: "22",
        especialidade: "Games",
        tecnologia: "Unity"
    }
    
]

console.log(`O usuário ${programadores[0].nome}, possui ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologia} com especialidade em ${programadores[0].especialidade}.`)