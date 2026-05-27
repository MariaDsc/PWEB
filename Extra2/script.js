// array que guarda todos os alunos adicionados
var alunos = [];

function adicionarAluno() {
  var nome  = document.getElementById("nome").value;
  var ra    = document.getElementById("ra").value;
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;


  var erro = document.getElementById("erro");
  erro.textContent = "";

  // --- VALIDAÇÕES ---

  // verifica se o nome não está vazio
  if (nome.trim() == "") {
    erro.textContent = "Nome não pode ser vazio.";
    return;
  }

  // separa as palavras do nome e verifica se tem pelo menos 2
  var palavras = nome.trim().split(" ");
  if (palavras.length < 2) {
    erro.textContent = "Informe nome e pelo menos um sobrenome.";
    return;
  }

  // verifica se o RA tem exatamente 5 dígitos numéricos
  if (!/^\d{5}$/.test(ra)) {
    erro.textContent = "RA deve ter exatamente 5 números.";
    return;
  }

  // converte as notas de texto para número
  var n1 = parseFloat(nota1);
  var n2 = parseFloat(nota2);
  var n3 = parseFloat(nota3);

  // verifica se as notas são números válidos entre 0 e 10
  if (isNaN(n1) || n1 < 0 || n1 > 10 ||
      isNaN(n2) || n2 < 0 || n2 > 10 ||
      isNaN(n3) || n3 < 0 || n3 > 10) {
    erro.textContent = "As notas devem ser números entre 0 e 10.";
    return;
  }

  // --- CÁLCULO DA MÉDIA ---

  var media = (n1 + n2 + n3) / 3;

  // arredonda para 2 casas decimais
  media = media.toFixed(2);

  // cria um objeto com os dados do aluno e adiciona no array
  var aluno = {
    nome: nome.trim(),
    ra: ra,
    media: media
  };
  alunos.push(aluno);

  // adiciona uma nova linha na tabela com os dados do aluno
  var tabela = document.getElementById("corpoTabela");
  var linha = "<tr>"
    + "<td>" + aluno.nome  + "</td>"
    + "<td>" + aluno.ra    + "</td>"
    + "<td>" + aluno.media + "</td>"
    + "</tr>";
  tabela.innerHTML += linha;

  // limpa os campos para o próximo aluno
  document.getElementById("nome").value  = "";
  document.getElementById("ra").value   = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}

function mostrarMediaGeral() {

  // verifica se pelo menos um aluno foi cadastrado
  if (alunos.length == 0) {
    alert("Cadastre pelo menos um aluno antes de finalizar.");
    return;
  }

  var somaMedias = 0;
  for (var i = 0; i < alunos.length; i++) {
    somaMedias += parseFloat(alunos[i].media);
  }

  var mediaGeral = somaMedias / alunos.length;
  mediaGeral = mediaGeral.toFixed(2);

  // mostra a caixa da média geral (que estava escondida)
  var div = document.getElementById("mediaGeral");
  div.style.display = "block";
  div.textContent = "Média geral da turma: " + mediaGeral;
}