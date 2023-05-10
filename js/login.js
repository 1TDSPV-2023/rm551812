"use strict"; //Serve para retringir algumas ações do coódigo

//CRIANDO OBJETOS

const usuario1 = {
    nomeUsu : "000",
    senhaUsu : "0000"

}

const usuario2 = {
    nomeUsu : "duCorno",
    senhaUsu : "LevouChifre"

}

//LISTA DE USUÁRIOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1, usuario2);
console.log(listaDeUsuarios);


//console.log(usuario1.nomeUsu);




// addEventListener('click', (evento)=>{
    
//     let userInput = document.querySelector("#idUser"); 
//     let passInput = document.querySelector("#idPass"); 
    
//     //console.log(evento.target);
//     if(evento.target.id == "btnSubmit"){
//         //console.log(evento.target);
        
//         if(userInput.value == "rm551812" && passInput.value == 12345){
//             console.log("foi");
//         }
//         else{
//             console.log("não foi");
//         }
    
    
    
    
//     }
// });


// addEventListener('click', (evento)=>{
    
//     let userInput = document.querySelector("#idUser"); 
//     let passInput = document.querySelector("#idPass"); 
    
//     //console.log(evento.target);
//     if(evento.target.id == "btnSubmit"){
//         //console.log(evento.target);
        
//         if(userInput.value == usuario1.nomeUsu && passInput.value == usuario1.senhaUsu){
//             console.log("foi");
//         }
//         else{
//             console.log("não foi");
//         }
    
    
    
    
//     }
// });





addEventListener('click', (evento)=>{

    let userInput = document.querySelector("#idUser"); 
    let passInput = document.querySelector("#idPass"); 
    
    //console.log(evento.target);
    if(evento.target.id == "btnSubmit"){

            try 
            {
                    listaDeUsuarios.forEach((usuario)=>{  
                        if(userInput.value == usuario.nomeUsu && passInput.value == usuario.senhaUsu){
                            throw "foi";
                    
                        }
                    });

                throw "não foi";
            }

            catch (msg) 
            {
                if(msg == "foi"){
                    console.log("foi");
                }
                else{
                    console.log("não foi");
                }
            }
        
        
    }
});
