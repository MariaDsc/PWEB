const numeros = [x, y, z]

function maior (numeros){
    //tem que colocar ... >> spread (mth.max não aceita array, ele espera valores separados por vírgula)
    return Math.max(...numeros)
}

function ordenar (numeros){
    return numeros.sort((a,b) => a-b);
}

function ePalindromo (palavra){
    const strInvertida = palavra.toUpperCase().split("").reverse().join("");

    return (strInvertida === palavra.toUpperCase()) ? "É palíndromo" : "Não é palíndromo";
}

function eSubconjunto (pal1, pal2){
    //pra verificar se é null ou undefined
   if (!pal1 || !pal2) {
    return "erro";
  }

  return (pal1.includes(pal2)) ? "É subconjunto" : "Não é subconjunto";
}

function diaSemana (data) {
    return data.toLocaleDateString("pt-BR", { weekday: "long" });
}

