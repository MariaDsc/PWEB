function abrirCurso(sel) {

  // pega o value da opção escolhida (ex: "ads", "bd", etc.)
  var key = sel.value;

  // se o usuário escolheu a opção vazia, não faz nada
  if (key == "") return;

  // exibe uma caixa de confirmação com o nome do curso
  var confirmado = confirm('Deseja abrir as informações do curso selecionado?');

  // volta o select para a opção padrão depois da escolha
  sel.value = "";

  // se o usuário clicou em Cancelar, para por aqui
  if (!confirmado) return;

  // salva qual curso foi escolhido no localStorage
  localStorage.setItem("cursoEscolhido", key);

  // abre o arquivo curso.html
  window.open("curso.html", "_blank", "width=600,height=300");
}