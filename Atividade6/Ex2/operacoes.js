let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let soma = numero1+numero2;
let sub = numero1-numero2;
let mult = numero1*numero2;
let div;
if (numero2 === 0) {
    div = "Não é possível dividir por zero";
} else {
    div = (numero1 / numero2).toFixed(2);
}
let resto = numero1 % numero2;

alert("Soma: "+ soma);
alert("Subtração: "+ sub);
alert("Multiplicação: "+ mult);
alert("Divisão: "+ div);
alert("Resto da divisão: " + resto);