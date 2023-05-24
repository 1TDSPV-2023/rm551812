"use strict"; //Serve para retringir algumas ações do coódigo


//Adicionando um atributo a cada objeto sendo eles:
//avatarUsuario
//Este atributo deve conter a URL da imagem de avatar do usuario 




// LISTA DE USUARIOS

let listaDeUsuarios = [
    {
        nomeCompleto : "JACINTO",
        nomeUsuario : "JA",
        senhaUsuario : "123",
        avatarUsuario : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4wVGjMQ37PaO4PdUVEAliSLi8-c2gJ1zvQ&usqp=CAU"
    },
    {
        nomeCompleto : "JACINTO2",
        nomeUsuario : "JA2",
        senhaUsuario : "123",
        avatarUsuario : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYpOOYgMxD_FO9y7jYv2F_DwMnnVMBj8rWQ&usqp=CAU"
    },
    {
        nomeCompleto : "JACINTO3",
        nomeUsuario : "JA3",
        senhaUsuario : "123",
        avatarUsuario : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A4QbtWpDKfwFiLvHdQrYGCziccVuVAxtpQ&usqp=CAU"
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

    //USUARIO QUE REPRESENTA OS DADOS QUE CHEGAM DO FORMULÁRIO
    const usuarioLogado = {
        nomeUsuarioLogado : userInput.value,
        senhaUsuarioLogado: passInput.value,
    };
    
    //USUARIO QUE VAI REPRESENTAR OS DADOS VALIDADOS
    let usuarioValidado = {};
    
  

      // MOSTRAR SENHA

    let listaDeUsuariosRecuperados = JSON.parse(localStorage.getItem("listaUser")); //RECFUPERAÇÃO DA LISTA DO LOCALSTORAGE
    
    //console.log(evento.target);
    if(evento.target.id == "btnSubmit"){

        try 
        {
            listaDeUsuariosRecuperados.forEach((usuario)=>{  
                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){

                    usuarioValidado = usuario;
                    throw "foi";
                    
                }
            });

            throw "não foi";
        }
        catch (msg) 
        {
            const msgStatus = document.querySelector("#info");

            if(msg == "foi"){
                console.log("foi");
                window.location.href = "../sucesso.html";

                msgStatus.setAttribute("style", "color:#00ff00;");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} realizou o login com SUCESSO!</strong></span>`;

                //Adicionar o objeto USUÁRIO-VALIDADO no LOCAL-STORAGE
                localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));


                //CRIANDO A AUTENTICAÇÃO
                let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                alert(token);

                localStorage.setItem("user-token", token);

                setTimeout(()=>{
                    window.location.href = "../sucesso.html";
                },3000);
            }
            else{
                console.log("não foi");
                msgStatus.setAttribute("style", "color:#ff0000;");
                msgStatus.innerHTML = `<span><strong>Login ou Usuario INCORRETOS!</strong></span>`;
            }
        }
        
        
    }
});
