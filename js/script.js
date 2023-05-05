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

// const aElements = document.getElementsByTagName("a");
// const aElementsArray = [...aElements];

// console.log(aElements);
// console.log(aElementsArray);

// //Declarando um Array em JS

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// // let nr3 = [nr1, nr2];

// console.log(nr1);
// console.log(nr2);
// // console.log(nr3);

// //OPERADOR SPREAD
// //SPREAD: função que se ultiliza colocando tres pontos antes do nome do let e ele colocara elemento por elemento, espalhando eles e não chamando a coleção inteira
// let nr3 = [...nr1,...nr2];
// console.log(nr3);

// //forEach - Loop, sendo o () onde ira ser declarada a variavel que ira receber cada elemento e no arrow as funções que irão ser feitas com esse parametro

// nr3.forEach( (numero)=>{
//     console.log("Item Array:", numero);
// });

// aElementsArray.forEach( (a)=>{
//     console.log("Item a da Array:", a);
// });

// //TAREFA EM AULA CHAMAR IMAGENS EM UMA ARRY

// const imgElementsArray = [...document.getElementsByTagName("img")];

// var i = 0
// imgElementsArray.forEach((img)=>{
//     i = i + 1
//     console.log("Imagem",i,":",img.src)
// });
 
// //querySelector: Um seletor que seleciona o primeiro elemento, ele pega com base no css

// const botao =  document.querySelector("div > button");

// //Listerner le o evento do click do botão
// botao.addEventListener("click", ()=>{
//     alert("O que você quiser!!!!")
// });

// let frutas = ["mamão", "laranja", "banana", "acerola", "kiwi", "uva"];

// // Inserir itens ao final do Array com o metodo do push()
// frutas.push("MAÇÃ");
// console.log(frutas);

// // Inserir itens ao inicio  do Array com o metodo do unshift()
// frutas.unshift("MAÇÃ");
// console.log(frutas);

// // Remove itens ao final do Array com o metodo pop()
// frutas.pop();
// console.log(frutas);

// // Remove itens ao inicio  do Array com o metodo do shift()
// frutas.shift();
// console.log(frutas);

// //Realizar a busca de um item no Array usando o método indexOf(iten)
// //Quando usamos o indexOf(iten) ele retorna o indice do item procurado
// let indice = frutas.indexOf("laranja");
// console.log(frutas[indice]);

// //Utilizando o método splice(indice do item, qtd de vezes que ele será removido), para remover um item do Array em conjunto com o indexOf(iten)
// let indice2 = frutas.indexOf("uva");

// frutas.log("Antes:" +  frutas[indice2]);
// frutas.splice(indice2,1);

// frutas.log("Deppois:" +  frutas[indice2]);

// //Exibe a tabela de Array
// console.table(frutas);

// //Estrutura de repetição para interação de collections
// let frutas = ["mamão", "laranja", "banana", "acerola", "kiwi", "uva"];

// const aElements = document.querySelectorAll("a");

// //LOOP FOR

// // for(let x = 0 ; x < 10 ; x++){
// //     console.log("Valor de x = "+ x);
// // }

// for(let x = 0 ; x < aElements.length ; x++){
//     console.log("Valor de x = " + aElements[x].text);
// }

// //LOOP FOR OF
// //Solta os elementos

// for(const fruta of frutas){
//     console.log("Fruta: " + fruta);
// }

// //LOOP FOR IN
// //Solta o indice dos elementos

// for(const indice in frutas){
//     console.log("Fruta: " + frutas[indice]);
// }

// //LOOP MAP
// //Ele gera um indice junto com a interação automatica

// frutas.map( (num, key)=>{
//     console.log(`Fruta nr:${key} ${num}`);
// });


const inputUser = document.querySelector("#idUser");

inputUser.addEventListener("focus", ()=> {
    inputUser.setAttribute("style","outline-color: #ff0000;")
});