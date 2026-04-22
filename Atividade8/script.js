const pessoas = [];
const TOTAL = 45;

// Função auxiliar simples para pegar radio checked
function getRadio(name) {
    const radio = document.querySelector(`input[name="${name}"]:checked`);
    // pega o input selecionado de acordo com o nome ("sexo" ou "opiniao")
    return radio ? radio.value : null;
    //se não encontrar nada, devolve nulo, se achar, devolve o resultado
}

function registrar(event) {
    event.preventDefault(); // impede a página de recarregar

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = getRadio('sexo');
    const opiniao = parseInt(getRadio('opiniao'));

    // validação >> campo vazio
    if (!idade || !sexo || !opiniao) {
        alert('Preencha todos os campos!');
        return;
    }

    // guarda pessoa
    pessoas.push({ idade, sexo, opiniao });

    if (pessoas.length >= TOTAL) {
        document.getElementById('progresso').textContent = `Todas as ${TOTAL} pessoas registradas!`;
        document.getElementById('btn-resultado').style.display = 'inline-block';
        document.querySelector('button[type="submit"]').style.display = 'none';

        // desabilita os campos
        document.getElementById('idade').disabled = true;
        document.querySelectorAll('input[type=radio]').forEach(r => {
            r.disabled = true;
        }); 
        
        } else {
            document.getElementById('progresso').textContent = `Pessoa ${pessoas.length + 1} de ${TOTAL}`;
        }

    // limpa os campos para a próxima pessoa
    document.getElementById('idade').value = '';
        document.querySelectorAll('input[type=radio]').forEach(r => r.checked = false);
    }


    function verResultados() {

        let somaIdades = 0;
        let maior = pessoas[0].idade;
        let menor = pessoas[0].idade;
        let qtdPessimo = 0;
        let qtdOtimoBom = 0;
        let fem = 0;
        let masc = 0;
        let outros = 0;

        for (let p of pessoas) {
            somaIdades += p.idade;

            if (p.idade > maior) maior = p.idade;
            if (p.idade < menor) menor = p.idade;

            if (p.opiniao === 1) qtdPessimo++;
            if (p.opiniao >= 3) qtdOtimoBom++;

            if (p.sexo === 'feminino') fem++;
            else if (p.sexo === 'masculino') masc++;
            else outros++;
        }

        const media = (somaIdades / pessoas.length).toFixed(1);
        const pctOtimoBom = ((qtdOtimoBom / pessoas.length) * 100).toFixed(1);

        const div = document.getElementById('resultado');
        div.style.display = 'block';
        div.innerHTML = `
        <p>Média de idade: ${media} anos</p>
        <p>Pessoa mais velha: ${maior} anos</p>
        <p>Pessoa mais nova: ${menor} anos</p>
        <p>Responderam péssimo: ${qtdPessimo} pessoas</p>
        <p>Responderam ótimo ou bom: ${pctOtimoBom}%</p>
        <p>Feminino: ${fem} | Masculino: ${masc} | Outros: ${outros}</p>
    `;
    }


