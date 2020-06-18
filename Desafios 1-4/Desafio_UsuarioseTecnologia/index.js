//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários

//array ou vetor é uma estrutura de dados ( como organiza dados) que compartilham valores do mesmo tipo


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

for (let elementos of usuarios) // percorre todas iteracoes possiveis tanto as tecnologias quanto os nomes e armazena na variavel elementos
{
    console.log(`${elementos.nome}, trabalha com ${elementos.tecnologias}.`)
}

//segunda parte do desafio: Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
//Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS (elemento)
{
   for(let tecno of elemento.tecnologias)
   {
       
    if (tecno == "CSS") 
        {
           return true
        }
   
   }
  
   return false
}

//Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário
    for (let i = 0; i < usuarios.length; i++) 
    {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]); // crio a variavel e verifico qual usuario retornou true na anterior.
  
    if (usuarioTrabalhaComCSS) // se achou algum usuario na lista, imprime o nome dele
    {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }







