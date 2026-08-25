// FUNÇÕES
// EVITAR REPETIÇÕES DE CÓDIGO
import readline from 'readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somarNumeros(n1, n2) { // ELA SÓ É EXECUTADA QUANDO CHAMADA
    const soma = Number(n1) + Number(n2)
    console.log(`${n1} + ${n2} = ${soma}`)
}

let numero1 = await rl.question("Digite o numero 1: ")
let numero2 = await rl.question("Digite o numero 2: ")

rl.close()
somarNumeros(numero1, numero2)
//somarNumeros(5, 6) // CHAMANDO/EXECUTANDO A FUNÇÃO somarNumeros

