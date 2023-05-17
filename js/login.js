"use strict"; //Serve para retringir algumas ações do coódigo


// LISTA DE USUARIOS

let listaDeUsuarios = [
    {
        nomeCompleto : "JACINTO",
        nomeUsuario : "JA",
        senhaUsuario : "123"
    },
    {
        nomeCompleto : "JACINTO2",
        nomeUsuario : "JA2",
        senhaUsuario : "123"
    },
    {
        nomeCompleto : "JACINTO3",
        nomeUsuario : "JA3",
        senhaUsuario : "123"
    }
];

localStorage.setItem( "listaUser", JSON.stringify( listaDeUsuarios));

//CRIANDO OBJETOS

// const usuario1 = {
//     nomeUsu : "000",
//     senhaUsu : "0000"

// }

// const usuario2 = {
//     nomeUsu : "duCorno",
//     senhaUsu : "LevouChifre"

// }

// //LISTA DE USUÁRIOS
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1, usuario2);
// console.log(listaDeUsuarios);


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
    let eyePass = document.querySelector(".fa");

     // MOSTRAR SENHA
 
    if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){
       evento.target.setAttribute("style", "cursor: pointer;");       

       if(passInput.getAttribute("type") == "password"){
            
            passInput.setAttribute("type", "text");
            eyePass.setAttribute("class", "fa fa-eye-slash");

       }
       else{
            evento.target.setAttribute("style", "cursor: pointer;");   
            passInput.setAttribute("type", "password");
            eyePass.setAttribute("class", "fa fa-eye");
       }

    }
      // MOSTRAR SENHA

    let listaDeUsuariosRecuperados = JSON.parse(localStorage.getItem("listaUser"));
    
    //console.log(evento.target);
    if(evento.target.id == "btnSubmit"){

            try 
            {
                    listaDeUsuariosRecuperados.forEach((usuario)=>{  
                        if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                            throw "foi";
                    
                        }
                    });

                throw "não foi";
            }

            catch (msg) 
            {
                if(msg == "foi"){
                    console.log("foi");
                    window.location.href = "../sucesso.html";
                }
                else{
                    console.log("não foi");
                }
            }
        
        
    }
});
