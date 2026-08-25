//ex01
let nota1= 10
let nota2= 7
let media=(nota1+nota2)/2

if(media >=7){
console.log("Passou!")}

else if (media >=5 && media <7){

console.log("Recuperação!")
} 


else {

console.log("Reprovado!")

}

//ex02

let senha = 1811
let tentativa = 9912


if (  tentativa==senha ){
console.log("acesso Permitido")

} else   {

 console.log("Acessso negado!")   
}

//ex03
let idade=  16 

if (idade <16 ){
console.log ("Não pode votar!")
}

else if(idade=16 &&  idade <18){
console.log("Voto opcional")

}

else if(idade>=18 && idade <=69 ){
console.log("Voto obrigatorio!")

}

else  {
console.log("Voto opcional!")

}