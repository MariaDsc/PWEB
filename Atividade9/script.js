function maior(numeros) {
    //tem que colocar ... >> spread (math.max não aceita array, ele espera valores separados por vírgula)
    return Math.max(...numeros);
}

function ordenar(numeros) {
    return numeros.sort((a, b) => a - b);
}

function ePalindromo(palavra) {
    const strInvertida = palavra.toUpperCase().split("").reverse().join("");
    return (strInvertida === palavra.toUpperCase()) ? "É palíndromo" : "Não é palíndromo";
}

function eSubconjunto(pal1, pal2) {
    //pra verificar se é null ou undefined
    if (!pal1 || !pal2) return "erro";
    return (pal1.includes(pal2)) ? "É subconjunto" : "Não é subconjunto";
}

function diaSemana(data) {
    return data.toLocaleDateString("pt-BR", { weekday: "long" });
}

function testarMaior() {
    const numeros = [Number(n1.value), Number(n2.value), Number(n3.value)];
    document.getElementById("res-maior").textContent = maior(numeros);
}

function testarOrdenar() {
    const numeros = ord.value.split(",").map(n => Number(n.trim()));
    document.getElementById("res-ordenar").textContent = ordenar(numeros).join(", ");
}

function testarPalindromo() {
    document.getElementById("res-palindromo").textContent = ePalindromo(pal.value);
}

function testarSubconjunto() {
    document.getElementById("res-subconjunto").textContent = eSubconjunto(sub1.value, sub2.value);
}

function testarDia() {
    const data = new Date(document.getElementById("data").value + "T00:00:00");
    document.getElementById("res-dia").textContent = diaSemana(data);
}