const opcoes = ["pedra", "papel", "tesoura"];

function escolhaComputador(){
    const indiceOpcoes = Math.floor(Math.random()*3); //ponto flutuante * 3 e depois transformado em numero sem virgula, para termos os índices 0, 1 ou 2 da lista de opções
    return opcoes[indiceOpcoes];
}

function vencedor (usuario, computador){
    if(usuario === computador){
        return "Empate!"
    }

    if(usuario==="pedra" && computador==="tesoura"){
        return "Você venceu!"
    }

    if(usuario==="tesoura" && computador==="papel"){
        return "Você venceu!"
    }

    if(usuario==="papel" && computador==="pedra"){
        return "Você venceu!"
    }

    else{
        return "Você perdeu!"
    }
}

function jogar(escolhaUsuario){
    const computador = escolhaComputador();
    const resultado = vencedor(escolhaUsuario, computador);

    alert("Você: " + escolhaUsuario);
    alert("Computador: " + computador);
    alert(resultado);

}