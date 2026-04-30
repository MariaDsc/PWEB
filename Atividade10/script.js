function calcIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (!altura || !peso) {
        document.getElementById("resultado").innerText = "Preencha todos os campos!";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = ""; //cria uma variavel vazia para receber a classificacao 

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerText =
        `IMC: ${imc.toFixed(2)} (${classificacao})`;
}