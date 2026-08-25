let idade = 40


let maiorDeIdade = idade >=18

let temIngresso = true
let temCarro = true 
let temMoto= false
//PARA IR A UMA FESTA, PRECISA SER MAIOR DE IDADE E TER UM INGRESSO

let podeIrAFesta = idade >= 18 && temIngresso && temCarro || temCarro

console.log("É maior de idade?", podeIrAFesta) 

//console.log("É maior de idade?", podeIrAFesta)