var cursos = {
  ads: {
    nome: "Análise e Desenvolvimento de Sistemas",
    grau: "Tecnólogo",
    duracao: "3 anos (6 semestres)",
    turno: "Noturno",
    desc: "Forma profissionais para desenvolver sistemas de software.",
    materias: "Programação, Banco de Dados, Engenharia de Software",
    mercado: "Desenvolvedor, analista de TI, arquiteto de software"
  },
  bd: {
    nome: "Banco de Dados",
    grau: "Tecnólogo",
    duracao: "3 anos (6 semestres)",
    turno: "Noturno",
    desc: "Capacita profissionais para administrar bancos de dados.",
    materias: "SQL, NoSQL, Data Warehouse, Big Data",
    mercado: "DBA, analista de dados, desenvolvedor BI"
  }
  // ... outros cursos
};

// lê qual curso foi salvo pelo index.html
var key = localStorage.getItem("cursoEscolhido");

// busca os dados desse curso
var c = cursos[key];

// preenche cada elemento do HTML com os dados corretos
document.getElementById("nome").textContent     = c.nome;
document.getElementById("grau").textContent     = c.grau;
document.getElementById("duracao").textContent  = c.duracao;
document.getElementById("turno").textContent    = c.turno;
document.getElementById("desc").textContent     = c.desc;
document.getElementById("materias").textContent = c.materias;
document.getElementById("mercado").textContent  = c.mercado;