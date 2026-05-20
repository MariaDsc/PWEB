function validarDados(){
    let nome = document.formulario.elements["nome"].value;
    let email = document.formulario.elements["email"].value;
    let comentario = document.formulario.elements["comentario"].value;
    let opcao = document.querySelector('input[name="opcoes"]:checked').value;

    let contemNumeros = /\d/.test(nome);
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //começa necessariamente com algo, sem ser espaço ou arroba, no meio vai ter q ter um arroba e depois de escrever algo, um ponto para por a extensão final

    if (nome.trim()==="" || contemNumeros){
        alert("Campo nome inválido. Mínimo 10 caracteres");
        document.formulario["nome"].focus();
        return false;
    }

    if (email.trim()==="" || !regexEmail.test(email)){
        alert("E-mail inválido");
        document.formulario["email"].focus();
        return false;
    }

    if (comentario.trim()===""){
        alert("Comentário inválido. Mínimo 20 caracteres");
        document.formulario["comentario"].focus();
        return false;
    }

    if(opcao === "sim"){
        alert("Volte sempre à esta página!");
    }else{
        alert("Que bom que você voltou a visitar essa página!");
    }

}