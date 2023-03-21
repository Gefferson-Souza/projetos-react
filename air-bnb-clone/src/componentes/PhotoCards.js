

const pessoas = [
    {
        nome : "Gefferson Teodoro",
        idade: 25,
        peso: "10kg",
    },
    {
        nome : "Gefferson Souza",
        idade: 5,
        peso: "10kg",
    },
    {
        nome : "Gefferson Tsouza",
        idade: 2,
        peso: "10kg",
    },
]

const nomes2 = pessoas.map((item) => {
    return {abc:item.idade, bla: item.nome}
})
console.log(pessoas)

console.log(nomes2)


