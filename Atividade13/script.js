const imagem = document.getElementById("imagem"); //referência para a tg <img>
const titulo = document.getElementById("titulo");

imagem.onmouseover = function(){
    imagem.src = "./Assets/aberta.png";
    imagem.alt = "Janela aberta";
    titulo.textContent = "Janela aberta!"
}

imagem.onmouseout = function(){
    imagem.src = "./Assets/fechada.png";
    imagem.alt = "Janela fechada";
    titulo.textContent = "Janela fechada";
}

imagem.onclick = function(){
    imagem.src = "./Assets/quebrada.png";
    imagem.alt = "Janela quebrada";
    titulo.textContent = "Janela quebrada"
}