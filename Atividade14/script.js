function converter(){
    let texto = document.getElementById("entrada").value;
    let escolha = document.querySelector('input[name="opcao"]:checked').value;
    let txtConvertido;

    if (escolha === "maiusculo"){
        txtConvertido = texto.toUpperCase();
    } else{
        txtConvertido = texto.toLowerCase();
    }
    alert(txtConvertido);
}