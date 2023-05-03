// alert('Hello World');
// document.write

                // VAR: quando declarada o JS usa o HOISTING onde sempre que existir variaveis com o mesmo nome se sobrepõem (elevando sempre a ultima mencionada ao "topo"), no caso exibi a utima caso 
                // LET: ele é usado em bloco, só lendo o que está no mesmo bloco
                // CONST: tipo de varriavel imutavel que tem q ser inicializada instantaneamente 
                // IF TERNARIO: caso for true o resultadoo ele exibe a primeira palavra caso contrario ele exibe a segunda

// var nome = "Luizinho";
// let nom2 = "Vitinho";
// const nome3 = "Eu mesmo";

// console.log(nome);
// console.log(nome2);
// console.log(nome3);

// nome = "Kaue";
// nome2 = "Ele";

// console.log(nome);
// console.log(nome2);
// console.log(nome3);

// if (nome == "")
// {
//     var nome = "Nicolly";
// }

// console.log(nome);
// console.log(nome2);
// console.log(nome3);

// if (nome != "")
// {
//     var nome = "Nicolly";
// }

// console.log(nome);
// console.log(nome2);
// console.log(nome3);

// let nr1 = 10;
// let nr2 = 5;

// //**** IF TERNÁRIO
// // let resultado  = (nr1 % n2) ? "PAR" : "IMPAR"
// // resultado: IMPAR


// // *** IF TERNÁRIO              IF TRUE    FALSE
// let resultado  = !(nr1 % n2) ? "PAR" : "IMPAR"
// // resultado: PAR



//**** RECUPERAR UM ELEMENTO DO HTML COM O GetElementById(id do HTML)
// const mn = document.getElementById("menu");

// console.log(mn.childNodes.values);

// console.log(mn.textContent); 

//Recuperando um collection de elementos...

//Quando colocar o cursoer sobre as tags de JS "<>", significa um esteriótipo de coleções

const aElements = document.getElementsByTagName("a");
const aElementsArray = [...aElements];

console.log(aElements);
console.log(aElementsArray);

//Declarando um Array em JS

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
// let nr3 = [nr1, nr2];

console.log(nr1);
console.log(nr2);
// console.log(nr3);

//OPERADOR SPREAD
//SPREAD: função que se ultiliza colocando tres pontos antes do nome do let e ele colocara elemento por elemento, espalhando eles e não chamando a coleção inteira
let nr3 = [...nr1,...nr2];
console.log(nr3);

//forEach - Loop, sendo o () onde ira ser declarada a variavel que ira receber cada elemento e no arrow as funções que irão ser feitas com esse parametro

nr3.forEach( (numero)=>{
    console.log("Item Array:", numero);
});

aElementsArray.forEach( (a)=>{
    console.log("Item a da Array:", a);
});

//TAREFA EM AULA CHAMAR IMAGENS EM UMA ARRY

const imgElementsArray = [...document.getElementsByTagName("img")];

var i = 0
imgElementsArray.forEach((img)=>{
    i = i + 1
    console.log("Imagem",i,":",img.src)
});
 
//querySelector: Um seletor que seleciona o primeiro elemento, ele pega com base no css

const botao =  document.querySelector("div > button");

//Listerner le o evento do click do botão
botao.addEventListener("click", ()=>{
    alert("O que você quiser!!!!")
});


