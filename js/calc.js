function insereNumeroNoVisor(botao,visor) { 
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/" || botao.value == ".")
    { 
        
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/" || visor.value[visor.value.length-1] == ".")
        { 
            visor.value[visor.value.length-1] = botao.value; 
            visor.value.slice(1); //sobrepoe o conteudeo
        }
            else{ 
                visor.value += botao.value; 
            } 
        }
        else{ 
            visor.value += botao.value;
        }
    }
function resultadoDasOperacoes(visor){
    /*eval() pega uma string e transforma em uma operação matemática */
    visor.value = eval(visor.value)
  
}

function apagarTudo(visor){
    visor.value = "";
}

function apagaUltimo(visor){
  
    visor.value = visor.value.substring(0, visor.value.length - 1);

}

function InverterSinal(visor){
    visor.value *= -1;
}