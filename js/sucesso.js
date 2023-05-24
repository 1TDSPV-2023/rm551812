
if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#bemvindo-user");
    const legendaEl = document.querySelector("#legenda");
    const bemVindoElIMG = document.querySelector("#bemvindo-img-user");
    const botaoLogout = document.querySelector("#btnSair");

    //RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    // bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;
    legendaEl.innerHTML = usuarioValidado.nomeCompleto;
    bemVindoElIMG.setAttribute("title", usuarioValidado.nomeUsuario);
    bemVindoElIMG.setAttribute("alt", usuarioValidado.nomeCompleto);
    bemVindoElIMG.setAttribute("src", usuarioValidado.avatarUsuario);

    
    //REMOVENDO OS ITENS DO LOCAL-STORAGE
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}
else{
    alert("Você precisa estar logado para acessar esta página!")
    window.location.href = "../login.html";
}